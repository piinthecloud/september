(function() {
    'use strict';
    angular
    .module('app')
    .directive('d3BarChart', d3BarChart)

    function d3BarChart() {
        return {
            restrict: 'E',
            scope:{
                data: '=',
                attributeY: '@',
                attributeX: '@'
            },
            link: function(scope) {

                var margin = {top: 20, right: 20, bottom: 70, left: 40},
                width = 600 - margin.left - margin.right,
                height = 300 - margin.top - margin.bottom
                var	parseDate = d3.time.format("%Y-%m-%d").parse;

                var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

                var y = d3.scale.linear().range([height, 0]);

                var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .tickFormat(d3.time.format("%m-%d"));

                var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left")
                .ticks(10);

                var svg = d3.select(".coupon-viz").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

                var data = scope.data;
                data.forEach(function(d) {
                    d[scope.attributeY] = parseDate(d[scope.attributeY]);
                    d[scope.attributeX] = +d[scope.attributeX];
                });

                x.domain(data.map(function(d) { return d[scope.attributeY]; }));
                y.domain([0, d3.max(data, function(d) { return d[scope.attributeX]; })]);

                svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis)
                .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", "-.55em")
                .attr("transform", "rotate(-90)" );

                svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Value ($)");

                svg.selectAll("bar")
                .data(data)
                .enter().append("rect")
                .style("fill", "steelblue")
                .attr("x", function(d) { return x(d[scope.attributeY]); })
                .attr("width", x.rangeBand())
                .attr("y", function(d) { return y(d[scope.attributeX]); })
                .attr("height", function(d) { return height - y(d[scope.attributeX]); });
            }
        }
    };
})();
