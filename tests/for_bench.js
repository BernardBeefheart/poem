/* 
 * File:   %<%NAME%>%.%<%EXTENSION%>%
 * Author: %<%USER%>%
 *
 * Created on %<%DATE%>%, %<%TIME%>%
 */
/* 
 * The MIT License
 *
 * Copyright 2015 bernard.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var fortime = 0;
var forintime = 0;
var foreachtime = 0;
/* creation d'un tableau */
var x = new Array();
for(var i = 0; i < 100000; i++)
{
	x[i] = "12345";
}
function mainloop()
{
	var newdate = new Date();
	var fordiff = newdate.getTime();
	for(var j = 0; j < 10; j++)
	{
		for(var i= 0; i < x.length; i++)
		{
    		var z = x[i];
		}
	}	
	newdate = new Date();
	fortime = fortime + (newdate.getTime() - fordiff);
	newdate = new Date();
	var forindiff = newdate.getTime();
	for(var j = 0; j < 10; j++)
	{
		for(var i in x)
		{
    		var z = i;
		}
	}	
	newdate = new Date();
	forintime = forintime + (newdate.getTime() - forindiff);
	newdate = new Date();
	var foreachdiff = newdate.getTime();
	for(var j = 0; j < 10; j++)
	{
		x.forEach(function(y) 
		{ 
		   var z = y; 
		});
	}
	newdate = new Date();
	foreachtime = foreachtime + (newdate.getTime() - foreachdiff);	
	console.log("for     : " + fortime);
	console.log("forin   : " + forintime);
	console.log("foreach : " + foreachtime);
}	
mainloop(); 