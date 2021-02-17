
import { squareNumber} from "../index";

describe('get the sqaure root of a number',() => {
    test('should return the square root',()=>{
            const input = 16;
            const output = 4;
            expect(squareNumber(input)).toEqual(output);
    });

  

});