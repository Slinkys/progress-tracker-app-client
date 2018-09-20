export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';
export const isTrimmed = value =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';
//length validator is function that returns a function
//inner function returns the string if invalid field (validator creator function)
//outer function takes length object that describes max and min length 
//and returns validator function that gets the value from the field and checks it  
export const length = length => value => {
    if (length.min && value.length < length.min) {
        return `Must be at least ${length.min} characters long`;
    }
    if (length.max && value.length > length.max) {
        return `Must be at most ${length.max} characters long`;
    }
};
//passwordConfirm field 
//<field> argument is name of field we want to match values
//<allValues> comes from Redux Form 
//and is an object which contains the values entered into each form field 
export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';        

