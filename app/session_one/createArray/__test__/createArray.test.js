import createArray from "../index";

describe('Create Array',() => {
    test('should create array from 0 to n-1',()=>{
            const input = 3;
            const output =[0,1,2] ;
            expect(createArray(input)).toEqual(output);
            expect(createArray(3)).toHaveLength(3);
    });

 
});