import { TestScheduler } from "jest";
import { capitalizeText } from "../index";

describe('Capitalize text',() => {
    test('should capitalize only the first letter',()=>{
            const input = 'hamada';
            const output = 'Hamada';
            expect(capitalizeText(input)).toEqual(output);
    });

    test('should return an empty string',()=>{
        const input = 12;
        const output = '';
        expect(capitalizeText(input)).toEqual(output);
});

});