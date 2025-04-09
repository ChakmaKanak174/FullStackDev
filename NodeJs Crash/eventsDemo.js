import { error } from 'console';
import { EventEmitter } from 'events';


// This emitter helps emit the events and also registering functions for events
const myEmitter = new EventEmitter();

// Functions to act when an event is emitted 
function greetHandler(name) {
    console.log('Hello '+ name);
}

function goodbyeHandler(name) {
    console.log('Goodbye '+ name);
    
}

// Register event listeners with functions 
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events ()

myEmitter.emit('greet', 'kanak');
myEmitter.emit('goodbye', 'kanak');

// Error handling

myEmitter.on('error', (err) => {
    console.log('an error ocurred: ', err);
    
});

// simulate error

myEmitter.emit('error', new Error('something went wrong'));