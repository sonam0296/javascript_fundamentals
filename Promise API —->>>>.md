Promise API —->>>>


Promise.all() :
When we want to do multiple API calls, multiple promises in parallel.
It takes array of promises.


Eg: 
	Promise.all([p1,p2,p3])  =>> 
Success Case ————>
	p1 takes 3sec, p2 takes 1sec and p3 takes 2sec to get result.
	O/p => Return array of value of all the promises of array i.e - [val1, val2, val3]
	This all takes 3sec to complete. 

IMP=>>> It will wait for all of them to finish

Any One Fails Case ————>
	Eg: 
	Promise.all([p1,p2,p3])  =>> 
	p1 takes 3sec, p2 takes 1sec and p3 takes 2sec to get result. 
	If any of the promise fails then promise.all() will throw an error. 
   O/p ==>> Error . As in this case if p1 and p2 gets successful response still promise.all() will give error

IMP =>>> After error it will not wait for other promises to success It will through an error
		
It’s KIND OF ALL OR NONE IN PROMISE.ALL()

2. Promise.allSettled() :
It is similar as promise.all() which takes array of promises and returns array of object of values of all the promises are resolved or successful.

Eg: 
	Promise.all([p1,p2,p3])  =>> 
Success Case ————>
	p1 takes 3sec, p2 takes 1sec and p3 takes 2sec to get result.
	O/p => Return array of value of all the promises of array i.e - [val1, val2, val3]
	This all takes 3sec to complete. 

Failure Case ————>
	With failure case it will be different from the promise.all().
	If p2 fails after 1s but still promise.allSettled() will wait for p1 and p3 to get settled for 3s.	
	And after 3s it will return [val1, err, val3].

IMP=>> It will wait for other promise to get settled even if any of the promise fails.

3. Promise.race():
It also takes array of promises. In this the promise which finish first will be the winner.
It will return the value of the first settled promise.

Eg: 
	Promise.all([p1,p2,p3])  =>> 
Success Case ————>
	p1 takes 3sec, p2 takes 1sec and p3 takes 2sec to get result.
	O/p => If p2 get settled first it will return the value for the p2 i.e val2. 

Failure Case ————>
	What if after 1s p2 gets failed.
	O/p => error will be thrown. It will return error

IMP=>> It’s a race whichever promise settles first will return the value for that promise irrespective of success or failure. It will not wait for other promises to get settled.

4. Promise.any() :
It also takes array of promises. It is very much similar to race.
The only difference is it will wait for 1st promise to get resolved or success. 


Eg: 
	Promise.all([p1,p2,p3])  =>> 
Success Case ————>
	p1 takes 3sec, p2 takes 1sec and p3 takes 2sec to get result.
	O/p => If p2 get resolved/successful first it will return the value for the p2 i.e val2. 

Failure Case ————>
	What if after 1s p2 gets failed. In this case promise.any() will wait b’coz it says it will return 		1st success value. So it will wait for the success. 
	After 2s p3 gets successful, now promise.any() will return val3.
	As we see p2 got reject so it will ignore this.


IMP=>> What if everything get fails. It will return aggregate error i.e it will be array of all the promises of error. [err1, err2,..]
	


