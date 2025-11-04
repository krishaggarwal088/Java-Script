        function findMax() {
            var i;
            var max = 0;
            for(i = 0; i < arguments.length; i++) {
                if (arguments[i] > max) {
                    max = arguments[i];
                    }
                }
                return max;
            }
            document.getElementById("result").innerHTML = findMax(4,
            5,6);