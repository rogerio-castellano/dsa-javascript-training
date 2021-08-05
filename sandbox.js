let a = {};
a.b = 1;
a.c = 2;
for(prop in a)
    console.log(prop, a[prop]);
