new Vue({
  el: '#app-nodemap',
  data: {
    map: null,
    sizes: [
      {
        minimumCount: 10,
        symbolSize: 23
      },
      {
        minimumCount: 5,
        symbolSize: 18
      },
      {
        minimumCount: 3,
        symbolSize: 13
      },
      {
        minimumCount: 1,
        symbolSize: 8
      },
    ],
  },
  methods: {
    updateMap: function(allNodes, map) {
      var that = this;
      var length = this.sizes.length;
      var nodes = new Array(length);
      var byCountryNodes = {};
      var totalCount = 0;
      var i;

      allNodes.forEach(function(data, index) {
        var temp = [];
        node = [data.longitude, data.latitude, data.count, data.city, data.province, data.country];
        for (i = 0; i < length; i++) {
          if (data.count >= that.sizes[i].minimumCount) {
            if (!nodes[i]) {
              nodes[i] = [];
            }
            nodes[i].push(node);
            break;
          }
        }
        if (!byCountryNodes[data.country]) {
          byCountryNodes[data.country] = data;
        } else {
          byCountryNodes[data.country].count += data.count;
        }
        totalCount += data.count;
      });

      byCountryNodes = Object.values(byCountryNodes).sort(function(a, b) {
        return b.count - a.count;
      });

      var series = this.sizes.map(function(size, index) {
        return {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: nodes[index],
          symbolSize: size.symbolSize,
          showEffectOn: 'render',
          rippleEffect: {
            scale: 3,
            brushType: 'stroke'
          },
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: '#ff8c3a'
            }
          }
        };
      });

      map.setOption({
        tooltip: {
          formatter: function(param) {
            var data = param.data;
            var location = {
              country: data[5],
              province: data[4],
              city: data[3],
              count: data[2]};
            return [
              interpolate(
                gettext('%(country)s %(province)s %(city)s'),
                location, true
              ).split(' ').filter(function(value) {
                return value !== '';
              }).join(gettext('，')),
              interpolate(
                gettext('数量：%(count)s'),
                location, true),
            ].join('<br>');
          }
        },
        geo: {
          map: 'world',
          left: 0,
          right: 0,
          silent: true,
          roam: true,
          itemStyle: {
            normal: {
              borderColor: '#ccc',
              color: '#4b73b0'
            }
          }
        },
        series: series
      });

      //update info
      if (totalCount > 0) {
        var template = $($('#nodeinfo--template').html());
      //   var ul = template.filter('ul');
      //   var rankTemplate = template.find('.nodeinfo--rankitem');
        template.find('.nodeinfo--count').text(totalCount);
      //   template.find('.nodeinfo--rankitem').remove();
      //   for (i = 0; i < 10; i++) {
      //     if (!byCountryNodes[i]) {
      //       break;
      //     }
      //     var rank = rankTemplate.clone().appendTo(ul);
      //     rank.find('.rank').text(i + 1);
      //     rank.find('.country').text(byCountryNodes[i].country);
      //     rank.find('.nodes').text(byCountryNodes[i].count);
      //   }
        $('.nodeinfo').html(template);
      }
    },

    updateNodes: function() {
      var that = this;
      $.ajax({
        url: '/api/nodes',
        dataType: 'json',
        success: function(data) {
          that.updateMap(data, that.map);
        },
        complete: function() {
          setTimeout(that.updateNodes, 30000);
        }
      });
    },
  },
  mounted: function() {
    var that = this;
    this.$nextTick(function() {
      $('body').on('touchstart', function(){});

      this.map = echarts.init($('#nodemap').get(0));

      this.updateNodes();
    });
  }
});

new Vue({
  el: '#select-language',
  data: {},
  methods: {
    languageChange: function() {
      $('#select-language').submit();
    }
  },
});
