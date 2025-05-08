1. What are some differences between interfaces and types in TypeScript?  
 => i) interfaces can't support union & intersection but types support both  
    ii) interface can extend by extends keyword but types extend by intersections   
    iii) if we declar two interface by same name interface will merge them there will be no error but in types we can't not declar two same type it will give use error  
    iv) we have to use interface for designing object  but types can be for any kind of type   

3. What is the use of the keyof keyword in TypeScript? Provide an example.
   
=> keyof keyword used in typescript to extracted key form an object

``` 
     type User = {
       id: number;
       name: string;
       isAdmin: boolean;
     };
     
     type UserKeys = keyof User;
     // will get : id , name , isAdmin
```
