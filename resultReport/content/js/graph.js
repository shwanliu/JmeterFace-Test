/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1938.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 3.0], [1.1, 3.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 4.0], [2.2, 4.0], [2.3, 4.0], [2.4, 4.0], [2.5, 4.0], [2.6, 4.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 6.0], [3.2, 6.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 7.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 9.0], [4.6, 9.0], [4.7, 10.0], [4.8, 10.0], [4.9, 11.0], [5.0, 12.0], [5.1, 13.0], [5.2, 13.0], [5.3, 14.0], [5.4, 16.0], [5.5, 17.0], [5.6, 19.0], [5.7, 21.0], [5.8, 22.0], [5.9, 26.0], [6.0, 27.0], [6.1, 28.0], [6.2, 28.0], [6.3, 28.0], [6.4, 28.0], [6.5, 29.0], [6.6, 29.0], [6.7, 30.0], [6.8, 30.0], [6.9, 30.0], [7.0, 30.0], [7.1, 31.0], [7.2, 31.0], [7.3, 31.0], [7.4, 31.0], [7.5, 31.0], [7.6, 31.0], [7.7, 31.0], [7.8, 31.0], [7.9, 32.0], [8.0, 32.0], [8.1, 32.0], [8.2, 32.0], [8.3, 32.0], [8.4, 32.0], [8.5, 32.0], [8.6, 33.0], [8.7, 33.0], [8.8, 33.0], [8.9, 33.0], [9.0, 33.0], [9.1, 33.0], [9.2, 33.0], [9.3, 33.0], [9.4, 33.0], [9.5, 33.0], [9.6, 34.0], [9.7, 34.0], [9.8, 34.0], [9.9, 34.0], [10.0, 34.0], [10.1, 34.0], [10.2, 34.0], [10.3, 34.0], [10.4, 34.0], [10.5, 34.0], [10.6, 34.0], [10.7, 34.0], [10.8, 35.0], [10.9, 35.0], [11.0, 35.0], [11.1, 35.0], [11.2, 35.0], [11.3, 35.0], [11.4, 35.0], [11.5, 35.0], [11.6, 35.0], [11.7, 35.0], [11.8, 35.0], [11.9, 35.0], [12.0, 35.0], [12.1, 35.0], [12.2, 35.0], [12.3, 35.0], [12.4, 35.0], [12.5, 35.0], [12.6, 36.0], [12.7, 36.0], [12.8, 36.0], [12.9, 36.0], [13.0, 36.0], [13.1, 36.0], [13.2, 36.0], [13.3, 36.0], [13.4, 36.0], [13.5, 36.0], [13.6, 36.0], [13.7, 36.0], [13.8, 36.0], [13.9, 36.0], [14.0, 36.0], [14.1, 36.0], [14.2, 36.0], [14.3, 37.0], [14.4, 37.0], [14.5, 37.0], [14.6, 37.0], [14.7, 37.0], [14.8, 37.0], [14.9, 37.0], [15.0, 37.0], [15.1, 37.0], [15.2, 37.0], [15.3, 37.0], [15.4, 37.0], [15.5, 37.0], [15.6, 37.0], [15.7, 37.0], [15.8, 37.0], [15.9, 37.0], [16.0, 37.0], [16.1, 37.0], [16.2, 37.0], [16.3, 37.0], [16.4, 38.0], [16.5, 38.0], [16.6, 38.0], [16.7, 38.0], [16.8, 38.0], [16.9, 38.0], [17.0, 38.0], [17.1, 38.0], [17.2, 38.0], [17.3, 38.0], [17.4, 38.0], [17.5, 38.0], [17.6, 38.0], [17.7, 38.0], [17.8, 38.0], [17.9, 38.0], [18.0, 38.0], [18.1, 38.0], [18.2, 38.0], [18.3, 38.0], [18.4, 38.0], [18.5, 38.0], [18.6, 38.0], [18.7, 38.0], [18.8, 38.0], [18.9, 38.0], [19.0, 38.0], [19.1, 39.0], [19.2, 39.0], [19.3, 39.0], [19.4, 39.0], [19.5, 39.0], [19.6, 39.0], [19.7, 39.0], [19.8, 39.0], [19.9, 39.0], [20.0, 39.0], [20.1, 39.0], [20.2, 39.0], [20.3, 39.0], [20.4, 39.0], [20.5, 39.0], [20.6, 39.0], [20.7, 39.0], [20.8, 39.0], [20.9, 39.0], [21.0, 39.0], [21.1, 39.0], [21.2, 39.0], [21.3, 39.0], [21.4, 39.0], [21.5, 39.0], [21.6, 39.0], [21.7, 39.0], [21.8, 39.0], [21.9, 39.0], [22.0, 39.0], [22.1, 39.0], [22.2, 39.0], [22.3, 39.0], [22.4, 40.0], [22.5, 40.0], [22.6, 40.0], [22.7, 40.0], [22.8, 40.0], [22.9, 40.0], [23.0, 40.0], [23.1, 40.0], [23.2, 40.0], [23.3, 40.0], [23.4, 40.0], [23.5, 40.0], [23.6, 40.0], [23.7, 40.0], [23.8, 40.0], [23.9, 40.0], [24.0, 40.0], [24.1, 40.0], [24.2, 40.0], [24.3, 40.0], [24.4, 40.0], [24.5, 40.0], [24.6, 40.0], [24.7, 40.0], [24.8, 40.0], [24.9, 40.0], [25.0, 40.0], [25.1, 40.0], [25.2, 40.0], [25.3, 40.0], [25.4, 40.0], [25.5, 40.0], [25.6, 40.0], [25.7, 40.0], [25.8, 40.0], [25.9, 40.0], [26.0, 41.0], [26.1, 41.0], [26.2, 41.0], [26.3, 41.0], [26.4, 41.0], [26.5, 41.0], [26.6, 41.0], [26.7, 41.0], [26.8, 41.0], [26.9, 41.0], [27.0, 41.0], [27.1, 41.0], [27.2, 41.0], [27.3, 41.0], [27.4, 41.0], [27.5, 41.0], [27.6, 41.0], [27.7, 41.0], [27.8, 41.0], [27.9, 41.0], [28.0, 41.0], [28.1, 41.0], [28.2, 41.0], [28.3, 41.0], [28.4, 41.0], [28.5, 41.0], [28.6, 41.0], [28.7, 41.0], [28.8, 41.0], [28.9, 41.0], [29.0, 42.0], [29.1, 42.0], [29.2, 42.0], [29.3, 42.0], [29.4, 42.0], [29.5, 42.0], [29.6, 42.0], [29.7, 42.0], [29.8, 42.0], [29.9, 42.0], [30.0, 42.0], [30.1, 42.0], [30.2, 42.0], [30.3, 42.0], [30.4, 42.0], [30.5, 42.0], [30.6, 42.0], [30.7, 42.0], [30.8, 42.0], [30.9, 42.0], [31.0, 42.0], [31.1, 42.0], [31.2, 42.0], [31.3, 42.0], [31.4, 42.0], [31.5, 42.0], [31.6, 42.0], [31.7, 42.0], [31.8, 42.0], [31.9, 42.0], [32.0, 42.0], [32.1, 42.0], [32.2, 42.0], [32.3, 42.0], [32.4, 43.0], [32.5, 43.0], [32.6, 43.0], [32.7, 43.0], [32.8, 43.0], [32.9, 43.0], [33.0, 43.0], [33.1, 43.0], [33.2, 43.0], [33.3, 43.0], [33.4, 43.0], [33.5, 43.0], [33.6, 43.0], [33.7, 43.0], [33.8, 43.0], [33.9, 43.0], [34.0, 43.0], [34.1, 43.0], [34.2, 43.0], [34.3, 43.0], [34.4, 43.0], [34.5, 43.0], [34.6, 43.0], [34.7, 43.0], [34.8, 43.0], [34.9, 43.0], [35.0, 43.0], [35.1, 43.0], [35.2, 43.0], [35.3, 43.0], [35.4, 44.0], [35.5, 44.0], [35.6, 44.0], [35.7, 44.0], [35.8, 44.0], [35.9, 44.0], [36.0, 44.0], [36.1, 44.0], [36.2, 44.0], [36.3, 44.0], [36.4, 44.0], [36.5, 44.0], [36.6, 44.0], [36.7, 44.0], [36.8, 44.0], [36.9, 44.0], [37.0, 44.0], [37.1, 44.0], [37.2, 44.0], [37.3, 44.0], [37.4, 44.0], [37.5, 44.0], [37.6, 44.0], [37.7, 44.0], [37.8, 44.0], [37.9, 44.0], [38.0, 44.0], [38.1, 44.0], [38.2, 44.0], [38.3, 44.0], [38.4, 44.0], [38.5, 44.0], [38.6, 44.0], [38.7, 44.0], [38.8, 45.0], [38.9, 45.0], [39.0, 45.0], [39.1, 45.0], [39.2, 45.0], [39.3, 45.0], [39.4, 45.0], [39.5, 45.0], [39.6, 45.0], [39.7, 45.0], [39.8, 45.0], [39.9, 45.0], [40.0, 45.0], [40.1, 45.0], [40.2, 45.0], [40.3, 45.0], [40.4, 45.0], [40.5, 45.0], [40.6, 45.0], [40.7, 45.0], [40.8, 45.0], [40.9, 45.0], [41.0, 45.0], [41.1, 45.0], [41.2, 45.0], [41.3, 45.0], [41.4, 45.0], [41.5, 45.0], [41.6, 46.0], [41.7, 46.0], [41.8, 46.0], [41.9, 46.0], [42.0, 46.0], [42.1, 46.0], [42.2, 46.0], [42.3, 46.0], [42.4, 46.0], [42.5, 46.0], [42.6, 46.0], [42.7, 46.0], [42.8, 46.0], [42.9, 46.0], [43.0, 46.0], [43.1, 46.0], [43.2, 46.0], [43.3, 46.0], [43.4, 46.0], [43.5, 46.0], [43.6, 46.0], [43.7, 46.0], [43.8, 46.0], [43.9, 46.0], [44.0, 46.0], [44.1, 46.0], [44.2, 47.0], [44.3, 47.0], [44.4, 47.0], [44.5, 47.0], [44.6, 47.0], [44.7, 47.0], [44.8, 47.0], [44.9, 47.0], [45.0, 47.0], [45.1, 47.0], [45.2, 47.0], [45.3, 47.0], [45.4, 47.0], [45.5, 47.0], [45.6, 47.0], [45.7, 47.0], [45.8, 47.0], [45.9, 47.0], [46.0, 47.0], [46.1, 48.0], [46.2, 48.0], [46.3, 48.0], [46.4, 48.0], [46.5, 48.0], [46.6, 48.0], [46.7, 48.0], [46.8, 48.0], [46.9, 48.0], [47.0, 48.0], [47.1, 48.0], [47.2, 48.0], [47.3, 48.0], [47.4, 48.0], [47.5, 48.0], [47.6, 48.0], [47.7, 49.0], [47.8, 49.0], [47.9, 49.0], [48.0, 49.0], [48.1, 49.0], [48.2, 49.0], [48.3, 49.0], [48.4, 49.0], [48.5, 49.0], [48.6, 49.0], [48.7, 49.0], [48.8, 49.0], [48.9, 49.0], [49.0, 49.0], [49.1, 49.0], [49.2, 49.0], [49.3, 49.0], [49.4, 49.0], [49.5, 50.0], [49.6, 50.0], [49.7, 50.0], [49.8, 50.0], [49.9, 50.0], [50.0, 50.0], [50.1, 50.0], [50.2, 50.0], [50.3, 50.0], [50.4, 50.0], [50.5, 50.0], [50.6, 50.0], [50.7, 50.0], [50.8, 51.0], [50.9, 51.0], [51.0, 51.0], [51.1, 51.0], [51.2, 51.0], [51.3, 51.0], [51.4, 51.0], [51.5, 51.0], [51.6, 51.0], [51.7, 51.0], [51.8, 51.0], [51.9, 51.0], [52.0, 51.0], [52.1, 51.0], [52.2, 51.0], [52.3, 51.0], [52.4, 52.0], [52.5, 52.0], [52.6, 52.0], [52.7, 52.0], [52.8, 52.0], [52.9, 52.0], [53.0, 52.0], [53.1, 52.0], [53.2, 52.0], [53.3, 52.0], [53.4, 52.0], [53.5, 52.0], [53.6, 52.0], [53.7, 52.0], [53.8, 53.0], [53.9, 53.0], [54.0, 53.0], [54.1, 53.0], [54.2, 53.0], [54.3, 53.0], [54.4, 53.0], [54.5, 53.0], [54.6, 53.0], [54.7, 53.0], [54.8, 53.0], [54.9, 53.0], [55.0, 53.0], [55.1, 53.0], [55.2, 54.0], [55.3, 54.0], [55.4, 54.0], [55.5, 54.0], [55.6, 54.0], [55.7, 54.0], [55.8, 54.0], [55.9, 54.0], [56.0, 54.0], [56.1, 54.0], [56.2, 54.0], [56.3, 54.0], [56.4, 54.0], [56.5, 55.0], [56.6, 55.0], [56.7, 55.0], [56.8, 55.0], [56.9, 55.0], [57.0, 55.0], [57.1, 55.0], [57.2, 55.0], [57.3, 55.0], [57.4, 55.0], [57.5, 55.0], [57.6, 55.0], [57.7, 56.0], [57.8, 56.0], [57.9, 56.0], [58.0, 56.0], [58.1, 56.0], [58.2, 56.0], [58.3, 56.0], [58.4, 56.0], [58.5, 56.0], [58.6, 56.0], [58.7, 56.0], [58.8, 56.0], [58.9, 56.0], [59.0, 56.0], [59.1, 57.0], [59.2, 57.0], [59.3, 57.0], [59.4, 57.0], [59.5, 57.0], [59.6, 57.0], [59.7, 57.0], [59.8, 57.0], [59.9, 57.0], [60.0, 57.0], [60.1, 57.0], [60.2, 58.0], [60.3, 58.0], [60.4, 58.0], [60.5, 58.0], [60.6, 58.0], [60.7, 58.0], [60.8, 58.0], [60.9, 58.0], [61.0, 58.0], [61.1, 58.0], [61.2, 58.0], [61.3, 59.0], [61.4, 59.0], [61.5, 59.0], [61.6, 59.0], [61.7, 59.0], [61.8, 59.0], [61.9, 59.0], [62.0, 59.0], [62.1, 59.0], [62.2, 59.0], [62.3, 59.0], [62.4, 60.0], [62.5, 60.0], [62.6, 60.0], [62.7, 60.0], [62.8, 60.0], [62.9, 60.0], [63.0, 60.0], [63.1, 60.0], [63.2, 60.0], [63.3, 60.0], [63.4, 60.0], [63.5, 60.0], [63.6, 61.0], [63.7, 61.0], [63.8, 61.0], [63.9, 61.0], [64.0, 61.0], [64.1, 61.0], [64.2, 61.0], [64.3, 61.0], [64.4, 61.0], [64.5, 61.0], [64.6, 62.0], [64.7, 62.0], [64.8, 62.0], [64.9, 62.0], [65.0, 62.0], [65.1, 62.0], [65.2, 62.0], [65.3, 62.0], [65.4, 62.0], [65.5, 63.0], [65.6, 63.0], [65.7, 63.0], [65.8, 63.0], [65.9, 63.0], [66.0, 63.0], [66.1, 63.0], [66.2, 63.0], [66.3, 63.0], [66.4, 63.0], [66.5, 63.0], [66.6, 64.0], [66.7, 64.0], [66.8, 64.0], [66.9, 64.0], [67.0, 64.0], [67.1, 64.0], [67.2, 64.0], [67.3, 64.0], [67.4, 64.0], [67.5, 64.0], [67.6, 65.0], [67.7, 65.0], [67.8, 65.0], [67.9, 65.0], [68.0, 65.0], [68.1, 65.0], [68.2, 65.0], [68.3, 65.0], [68.4, 65.0], [68.5, 66.0], [68.6, 66.0], [68.7, 66.0], [68.8, 66.0], [68.9, 66.0], [69.0, 66.0], [69.1, 66.0], [69.2, 67.0], [69.3, 67.0], [69.4, 67.0], [69.5, 67.0], [69.6, 67.0], [69.7, 67.0], [69.8, 67.0], [69.9, 68.0], [70.0, 68.0], [70.1, 68.0], [70.2, 68.0], [70.3, 68.0], [70.4, 68.0], [70.5, 68.0], [70.6, 69.0], [70.7, 69.0], [70.8, 69.0], [70.9, 69.0], [71.0, 69.0], [71.1, 69.0], [71.2, 69.0], [71.3, 70.0], [71.4, 70.0], [71.5, 70.0], [71.6, 70.0], [71.7, 70.0], [71.8, 70.0], [71.9, 70.0], [72.0, 70.0], [72.1, 71.0], [72.2, 71.0], [72.3, 71.0], [72.4, 71.0], [72.5, 71.0], [72.6, 71.0], [72.7, 71.0], [72.8, 71.0], [72.9, 72.0], [73.0, 72.0], [73.1, 72.0], [73.2, 72.0], [73.3, 72.0], [73.4, 72.0], [73.5, 72.0], [73.6, 73.0], [73.7, 73.0], [73.8, 73.0], [73.9, 73.0], [74.0, 73.0], [74.1, 73.0], [74.2, 73.0], [74.3, 74.0], [74.4, 74.0], [74.5, 74.0], [74.6, 74.0], [74.7, 74.0], [74.8, 74.0], [74.9, 75.0], [75.0, 75.0], [75.1, 75.0], [75.2, 76.0], [75.3, 76.0], [75.4, 76.0], [75.5, 76.0], [75.6, 76.0], [75.7, 77.0], [75.8, 77.0], [75.9, 77.0], [76.0, 77.0], [76.1, 77.0], [76.2, 77.0], [76.3, 78.0], [76.4, 78.0], [76.5, 78.0], [76.6, 78.0], [76.7, 78.0], [76.8, 79.0], [76.9, 79.0], [77.0, 79.0], [77.1, 79.0], [77.2, 79.0], [77.3, 80.0], [77.4, 80.0], [77.5, 80.0], [77.6, 80.0], [77.7, 80.0], [77.8, 81.0], [77.9, 81.0], [78.0, 81.0], [78.1, 81.0], [78.2, 82.0], [78.3, 82.0], [78.4, 82.0], [78.5, 82.0], [78.6, 83.0], [78.7, 83.0], [78.8, 83.0], [78.9, 83.0], [79.0, 84.0], [79.1, 84.0], [79.2, 84.0], [79.3, 84.0], [79.4, 85.0], [79.5, 85.0], [79.6, 85.0], [79.7, 85.0], [79.8, 85.0], [79.9, 85.0], [80.0, 86.0], [80.1, 86.0], [80.2, 86.0], [80.3, 87.0], [80.4, 87.0], [80.5, 87.0], [80.6, 87.0], [80.7, 87.0], [80.8, 88.0], [80.9, 88.0], [81.0, 88.0], [81.1, 89.0], [81.2, 89.0], [81.3, 89.0], [81.4, 89.0], [81.5, 90.0], [81.6, 90.0], [81.7, 90.0], [81.8, 91.0], [81.9, 91.0], [82.0, 92.0], [82.1, 92.0], [82.2, 92.0], [82.3, 93.0], [82.4, 93.0], [82.5, 93.0], [82.6, 94.0], [82.7, 94.0], [82.8, 95.0], [82.9, 95.0], [83.0, 95.0], [83.1, 96.0], [83.2, 96.0], [83.3, 97.0], [83.4, 97.0], [83.5, 97.0], [83.6, 98.0], [83.7, 98.0], [83.8, 98.0], [83.9, 98.0], [84.0, 99.0], [84.1, 99.0], [84.2, 99.0], [84.3, 100.0], [84.4, 100.0], [84.5, 100.0], [84.6, 100.0], [84.7, 101.0], [84.8, 101.0], [84.9, 101.0], [85.0, 102.0], [85.1, 102.0], [85.2, 102.0], [85.3, 102.0], [85.4, 103.0], [85.5, 103.0], [85.6, 104.0], [85.7, 104.0], [85.8, 105.0], [85.9, 105.0], [86.0, 106.0], [86.1, 106.0], [86.2, 106.0], [86.3, 107.0], [86.4, 107.0], [86.5, 107.0], [86.6, 108.0], [86.7, 108.0], [86.8, 108.0], [86.9, 108.0], [87.0, 109.0], [87.1, 109.0], [87.2, 110.0], [87.3, 110.0], [87.4, 110.0], [87.5, 111.0], [87.6, 111.0], [87.7, 112.0], [87.8, 113.0], [87.9, 113.0], [88.0, 113.0], [88.1, 114.0], [88.2, 114.0], [88.3, 115.0], [88.4, 115.0], [88.5, 116.0], [88.6, 117.0], [88.7, 117.0], [88.8, 118.0], [88.9, 118.0], [89.0, 119.0], [89.1, 120.0], [89.2, 120.0], [89.3, 121.0], [89.4, 122.0], [89.5, 123.0], [89.6, 124.0], [89.7, 125.0], [89.8, 125.0], [89.9, 125.0], [90.0, 126.0], [90.1, 127.0], [90.2, 127.0], [90.3, 128.0], [90.4, 129.0], [90.5, 130.0], [90.6, 130.0], [90.7, 131.0], [90.8, 132.0], [90.9, 133.0], [91.0, 133.0], [91.1, 134.0], [91.2, 135.0], [91.3, 135.0], [91.4, 136.0], [91.5, 136.0], [91.6, 137.0], [91.7, 138.0], [91.8, 138.0], [91.9, 139.0], [92.0, 139.0], [92.1, 141.0], [92.2, 142.0], [92.3, 143.0], [92.4, 144.0], [92.5, 145.0], [92.6, 146.0], [92.7, 147.0], [92.8, 149.0], [92.9, 151.0], [93.0, 152.0], [93.1, 152.0], [93.2, 153.0], [93.3, 155.0], [93.4, 156.0], [93.5, 159.0], [93.6, 160.0], [93.7, 161.0], [93.8, 162.0], [93.9, 163.0], [94.0, 164.0], [94.1, 165.0], [94.2, 167.0], [94.3, 169.0], [94.4, 170.0], [94.5, 171.0], [94.6, 173.0], [94.7, 175.0], [94.8, 175.0], [94.9, 176.0], [95.0, 178.0], [95.1, 180.0], [95.2, 181.0], [95.3, 183.0], [95.4, 184.0], [95.5, 185.0], [95.6, 187.0], [95.7, 189.0], [95.8, 193.0], [95.9, 195.0], [96.0, 197.0], [96.1, 200.0], [96.2, 202.0], [96.3, 204.0], [96.4, 207.0], [96.5, 208.0], [96.6, 211.0], [96.7, 215.0], [96.8, 219.0], [96.9, 222.0], [97.0, 228.0], [97.1, 229.0], [97.2, 231.0], [97.3, 235.0], [97.4, 240.0], [97.5, 249.0], [97.6, 260.0], [97.7, 266.0], [97.8, 286.0], [97.9, 292.0], [98.0, 298.0], [98.1, 309.0], [98.2, 316.0], [98.3, 324.0], [98.4, 334.0], [98.5, 344.0], [98.6, 364.0], [98.7, 372.0], [98.8, 379.0], [98.9, 400.0], [99.0, 422.0], [99.1, 460.0], [99.2, 492.0], [99.3, 520.0], [99.4, 590.0], [99.5, 625.0], [99.6, 676.0], [99.7, 726.0], [99.8, 970.0], [99.9, 1066.0]], "isOverall": false, "label": "identifyface", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4215.0, "series": [{"data": [[0.0, 4215.0], [600.0, 10.0], [700.0, 5.0], [200.0, 99.0], [800.0, 1.0], [900.0, 6.0], [1000.0, 2.0], [300.0, 43.0], [1200.0, 2.0], [100.0, 588.0], [400.0, 18.0], [1800.0, 1.0], [1900.0, 1.0], [500.0, 9.0]], "isOverall": false, "label": "identifyface", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4496.0, "series": [{"data": [[0.0, 4496.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 33.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 469.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.2051282051282048, "minX": 1.54026048E12, "maxY": 2.428571428571428, "series": [{"data": [[1.5402606E12, 1.2086206896551739], [1.54026078E12, 1.2089041095890398], [1.54026072E12, 1.4016949152542377], [1.5402609E12, 1.2183708838821499], [1.54026084E12, 1.2051282051282048], [1.54026054E12, 1.2350936967632027], [1.54026102E12, 1.2328767123287676], [1.54026048E12, 2.428571428571428], [1.54026096E12, 1.4734133790737558], [1.54026066E12, 1.232758620689655]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54026102E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 53.850469662350825, "minX": 1.0, "maxY": 262.24999999999994, "series": [{"data": [[2.0, 128.13473423980207], [1.0, 53.850469662350825], [4.0, 222.27659574468083], [5.0, 262.24999999999994], [3.0, 164.59239130434784], [6.0, 235.0]], "isOverall": false, "label": "identifyface", "isController": false}, {"data": [[1.2806000000000024, 72.39799999999985]], "isOverall": false, "label": "identifyface-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 6.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 550.6666666666666, "minX": 1.54026048E12, "maxY": 3395911.216666667, "series": [{"data": [[1.5402606E12, 7745.2], [1.54026078E12, 7751.016666666666], [1.54026072E12, 7916.9], [1.5402609E12, 7613.2], [1.54026084E12, 7772.516666666666], [1.54026054E12, 7614.55], [1.54026102E12, 3930.5333333333333], [1.54026048E12, 550.6666666666666], [1.54026096E12, 7767.916666666667], [1.54026066E12, 7497.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5402606E12, 2038104.05], [1.54026078E12, 1537806.1833333333], [1.54026072E12, 2253949.0], [1.5402609E12, 2072375.1166666667], [1.54026084E12, 1754227.0333333334], [1.54026054E12, 1886818.8], [1.54026102E12, 1213981.0], [1.54026048E12, 423005.9], [1.54026096E12, 3395911.216666667], [1.54026066E12, 1719098.65]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54026102E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 59.962521294718876, "minX": 1.54026048E12, "maxY": 183.19047619047618, "series": [{"data": [[1.5402606E12, 61.124137931034525], [1.54026078E12, 66.60445205479462], [1.54026072E12, 84.04576271186441], [1.5402609E12, 69.75043327556332], [1.54026084E12, 67.57094017094028], [1.54026054E12, 59.962521294718876], [1.54026102E12, 73.99315068493146], [1.54026048E12, 183.19047619047618], [1.54026096E12, 95.80789022298447], [1.54026066E12, 65.38793103448268]], "isOverall": false, "label": "identifyface", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54026102E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 59.95570698466781, "minX": 1.54026048E12, "maxY": 183.14285714285717, "series": [{"data": [[1.5402606E12, 61.060344827586285], [1.54026078E12, 66.59760273972607], [1.54026072E12, 84.03898305084735], [1.5402609E12, 69.7452339688042], [1.54026084E12, 67.56923076923073], [1.54026054E12, 59.95570698466781], [1.54026102E12, 73.98287671232877], [1.54026048E12, 183.14285714285717], [1.54026096E12, 95.8061749571183], [1.54026066E12, 65.38103448275864]], "isOverall": false, "label": "identifyface", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54026102E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1.8630849220103984, "minX": 1.54026048E12, "maxY": 13.999999999999995, "series": [{"data": [[1.5402606E12, 2.1293103448275867], [1.54026078E12, 2.1113013698630136], [1.54026072E12, 2.9254237288135596], [1.5402609E12, 1.8630849220103984], [1.54026084E12, 1.9589743589743602], [1.54026054E12, 2.618398637137987], [1.54026102E12, 2.2876712328767126], [1.54026048E12, 13.999999999999995], [1.54026096E12, 4.051457975986278], [1.54026066E12, 2.2758620689655196]], "isOverall": false, "label": "identifyface", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54026102E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 27.0, "minX": 1.54026048E12, "maxY": 1938.0, "series": [{"data": [[1.5402606E12, 590.0], [1.54026078E12, 1219.0], [1.54026072E12, 701.0], [1.5402609E12, 618.0], [1.54026084E12, 608.0], [1.54026054E12, 970.0], [1.54026102E12, 625.0], [1.54026048E12, 1938.0], [1.54026096E12, 1217.0], [1.54026066E12, 901.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5402606E12, 27.0], [1.54026078E12, 32.0], [1.54026072E12, 32.0], [1.5402609E12, 31.0], [1.54026084E12, 32.0], [1.54026054E12, 27.0], [1.54026102E12, 30.0], [1.54026048E12, 32.0], [1.54026096E12, 32.0], [1.54026066E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5402606E12, 113.0], [1.54026078E12, 120.0], [1.54026072E12, 126.0], [1.5402609E12, 120.0], [1.54026084E12, 117.09999999999991], [1.54026054E12, 114.80000000000007], [1.54026102E12, 127.0], [1.54026048E12, 259.3000000000002], [1.54026096E12, 127.0], [1.54026066E12, 115.10000000000014]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5402606E12, 475.6599999999994], [1.54026078E12, 383.3199999999988], [1.54026072E12, 397.1199999999999], [1.5402609E12, 376.73], [1.54026084E12, 387.4599999999991], [1.54026054E12, 553.1199999999985], [1.54026102E12, 443.08000000000175], [1.54026048E12, 1938.0], [1.54026096E12, 458.1099999999997], [1.54026066E12, 393.4600000000005]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5402606E12, 173.29999999999973], [1.54026078E12, 170.0999999999999], [1.54026072E12, 175.5999999999999], [1.5402609E12, 171.0], [1.54026084E12, 169.0], [1.54026054E12, 196.19999999999993], [1.54026102E12, 180.0], [1.54026048E12, 1807.8499999999997], [1.54026096E12, 176.0], [1.54026066E12, 167.54999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54026102E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 9.0, "minX": 1000.0, "maxY": 119.0, "series": [{"data": [[1000.0, 51.0], [2000.0, 119.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1000.0, 9.0], [2000.0, 12.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 9.0, "minX": 1000.0, "maxY": 119.0, "series": [{"data": [[1000.0, 51.0], [2000.0, 119.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1000.0, 9.0], [2000.0, 12.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.7, "minX": 1.54026048E12, "maxY": 9.816666666666666, "series": [{"data": [[1.5402606E12, 9.683333333333334], [1.54026078E12, 9.75], [1.54026072E12, 9.816666666666666], [1.5402609E12, 9.65], [1.54026084E12, 9.733333333333333], [1.54026054E12, 9.783333333333333], [1.54026102E12, 4.833333333333333], [1.54026048E12, 0.7], [1.54026096E12, 9.716666666666667], [1.54026066E12, 9.666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54026102E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.54026048E12, "maxY": 8.983333333333333, "series": [{"data": [[1.5402606E12, 8.75], [1.54026078E12, 8.833333333333334], [1.54026072E12, 8.983333333333333], [1.5402609E12, 8.633333333333333], [1.54026084E12, 8.85], [1.54026054E12, 8.883333333333333], [1.54026102E12, 4.483333333333333], [1.54026048E12, 0.6333333333333333], [1.54026096E12, 8.933333333333334], [1.54026066E12, 8.533333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.5402606E12, 0.9], [1.54026078E12, 0.9], [1.54026072E12, 0.85], [1.5402609E12, 0.9833333333333333], [1.54026084E12, 0.9], [1.54026054E12, 0.9], [1.54026102E12, 0.38333333333333336], [1.54026048E12, 0.06666666666666667], [1.54026096E12, 0.7833333333333333], [1.54026066E12, 1.1333333333333333]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.5402606E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54026102E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.54026048E12, "maxY": 8.983333333333333, "series": [{"data": [[1.5402606E12, 8.75], [1.54026078E12, 8.833333333333334], [1.54026072E12, 8.983333333333333], [1.5402609E12, 8.633333333333333], [1.54026084E12, 8.85], [1.54026054E12, 8.883333333333333], [1.54026102E12, 4.483333333333333], [1.54026048E12, 0.6333333333333333], [1.54026096E12, 8.933333333333334], [1.54026066E12, 8.533333333333333]], "isOverall": false, "label": "identifyface-success", "isController": false}, {"data": [[1.5402606E12, 0.9166666666666666], [1.54026078E12, 0.9], [1.54026072E12, 0.85], [1.5402609E12, 0.9833333333333333], [1.54026084E12, 0.9], [1.54026054E12, 0.9], [1.54026102E12, 0.38333333333333336], [1.54026048E12, 0.06666666666666667], [1.54026096E12, 0.7833333333333333], [1.54026066E12, 1.1333333333333333]], "isOverall": false, "label": "identifyface-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54026102E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.54026048E12, "maxY": 8.983333333333333, "series": [{"data": [[1.5402606E12, 8.75], [1.54026078E12, 8.833333333333334], [1.54026072E12, 8.983333333333333], [1.5402609E12, 8.633333333333333], [1.54026084E12, 8.85], [1.54026054E12, 8.883333333333333], [1.54026102E12, 4.483333333333333], [1.54026048E12, 0.6333333333333333], [1.54026096E12, 8.933333333333334], [1.54026066E12, 8.533333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.5402606E12, 0.9166666666666666], [1.54026078E12, 0.9], [1.54026072E12, 0.85], [1.5402609E12, 0.9833333333333333], [1.54026084E12, 0.9], [1.54026054E12, 0.9], [1.54026102E12, 0.38333333333333336], [1.54026048E12, 0.06666666666666667], [1.54026096E12, 0.7833333333333333], [1.54026066E12, 1.1333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54026102E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

