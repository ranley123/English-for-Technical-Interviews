## Resources
https://www.bilibili.com/video/BV11h4y1P7Yp/?spm_id_from=333.999.0.0 视频链接

https://leetcode.cn/problems/two-sum/ 题目链接

https://www.collinsdictionary.com/dictionary/ 我喜欢的英文在线字典


## Vocabulary

|     英文                       	|     中文              	|     音标           	|     重要程度    	|
|--------------------------------	|-----------------------	|--------------------	|-----------------	|
|     brute force method         	|     暴力法            	|     bruːt fɔːʳs    	|     🌟🌟🌟🌟🌟       	|
|     time complexity            	|     时间复杂度        	|     kəmpleksɪti    	|     🌟🌟🌟🌟🌟       	|
|     n squared                  	|     n的平方           	|     skweəʳd        	|     🌟🌟🌟🌟🌟       	|
|     length                     	|     长度              	|                    	|     🌟🌟🌟🌟🌟       	|
|     array                      	|     数组              	|     əreɪ           	|     🌟🌟🌟🌟🌟       	|
|     element                    	|     元素              	|     elɪmənt        	|     🌟🌟🌟🌟🌟       	|
|     store                      	|     存储              	|                    	|     🌟🌟🌟🌟🌟       	|
|     key-value pair             	|     键值对            	|                    	|     🌟🌟🌟🌟🌟       	|
|     iterate over / go through this array    	|     遍历这个数组      	|     ɪtəˌreɪt       	|     🌟🌟🌟🌟🌟       	|
|     sum up to                  	|     总和为            	|                    	|     🌟🌟🌟🌟🌟       	|
|     add / plus                 	|     加上              	|                    	|     🌟🌟🌟🌟🌟       	|
|     index / indices            	|     索引 （单/复）    	|                    	|     🌟🌟🌟🌟🌟       	|
|     declare a variable         	|     声明一个变量      	|     dɪkleəʳ        	|     🌟🌟🌟🌟🌟       	|
|     is equal to / equals       	|     等于              	|     iːkwəl         	|     🌟🌟🌟🌟🌟       	|
|     minus         	|     减去              	|     maɪnəs         	|     🌟🌟🌟🌟🌟       	|
|     combination                	|     组合              	|     kɒmbɪneɪʃən    	|     🌟🌟🌟         	|
|     Repeat the same steps      	|     重复同样的步骤    	|                    	|     🌟🌟🌟         	|
|     In this case               	|     在这种情况下      	|                    	|     🌟🌟🌟         	|
|     by default                 	|     默认              	|     dɪfɔːlt        	|     🌟🌟🌟         	|
|     find out                   	|     发现              	|                    	|     🌟🌟          	|
|     difference                 	|     差值              	|                    	|     🌟🌟          	|
|     move on to                 	|     移动到            	|                    	|     🌟🌟          	|

## Script
### Explain How to Use Brute Force
We have two solutions here. The first one is using brute force method
which has the time complexity: n squared. The solution is that we check out every combination of 2 values and see if they can sum up to our targeting value
which is 8. For example, if we start at 3 then we check every combination
that includes 3
and see if any of the numbers added to 3
so their sum is the target. In this case none of them works.
So we start from 2
repeat the same steps,
and we found out the combination of 2 and 6
their sum is exactly 8.
So we can just directly return their indices
which is 1 and 3.

### Explain Brute Force Code
OK for this brutal force method,
the code goes here.
So firstly we are going to declare a variable called n,
which represents the length of the nums array.
So as we're gonna check out
every combination of two elements from this array,
so we're gonna use a nested for loop to do so.
Inside we have every combination and we will check
if the sum of these two elements is equal to a target. If so
then
we can just directly return the two indices of these numbers
and if not at the end of the program
we will just return an empty array by default.

### Explain How to Use HashMap
The second solution is to use hash map
which has time complexity about O(N). So
we're gonna use this hash map to store key-value pairs
where the key is the element, 
and the value is the index of this element.
Then we iterate over this array from the first element 3.
Because now
we are looking for 5 as 3 plus 5 equals 8,
so we will try to check if the map has already
stored five inside.
Unfortunately no,
so we store the current
element and it is index in the map for future usage.

Now we can move on to the next element 2
as the difference between the
target 8 and the current element 2 is 6.
But the map doesn't have it, so we still
store the element and its index.

Move on to 1. Same thing happened we still need to
store the one and its index.

But things are different for six,
as now we're looking for
8 minus 6 equals 2 and the map has 2 inside.
So we can use map
get to get its index, and now we just returned 1 and 3.

### Explain HashMap Code
If we want to use hash map,
then basically we need to declare a map,
where the key
is an integer representing for the element and value is the index.
We iterates over the array, and for each element,
we gonna calculate
the difference between the target and the current element.
We're gonna check
if the difference value word exists in this map or not.
If so, then
also we just directly return the two indices.
If not we simply put the element and it's
index in the map.

At the end of the program
we need to return an empty array by default
