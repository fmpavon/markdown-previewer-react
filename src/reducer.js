const initState = {
    input: `# This is a heading
## This is another heading

This is a line of text with [a link](https://www.freecodecamp.org), \`inline code\` and **bolded text**. With a code-block:

\`\`\`js
const currentInput = 'input';

function returnInput(){
    return currentInput;
}
\`\`\`

This is a list:

- list item 1
- list item 2
- list item 3

>This is a blockquote...

And finally, an image:
![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png)
>This file is licensed under the Creative Commons Attribution-Share Alike 1.0 Generic license.
>**Attribution: *Facebook***`
}

export default function appReducer(state = initState, action) {
    switch (action.type) {
        case 'INPUT':
            return {
                ...state,
                input: action.input
            };
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}



