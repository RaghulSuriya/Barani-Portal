<<<<<<< HEAD

try {
    const { Label } = require('radix-ui');
    console.log('Label type:', typeof Label);
    console.log('Label keys:', Object.keys(Label));
    if (Label.Root) {
        console.log('Label.Root exists');
    } else {
        console.log('Label.Root DOES NOT exist');
    }
} catch (e) {
    console.error('Error:', e.message);
}
=======

try {
    const { Label } = require('radix-ui');
    console.log('Label type:', typeof Label);
    console.log('Label keys:', Object.keys(Label));
    if (Label.Root) {
        console.log('Label.Root exists');
    } else {
        console.log('Label.Root DOES NOT exist');
    }
} catch (e) {
    console.error('Error:', e.message);
}
>>>>>>> 35f8b4db7cb98930b5bb54f9715f68db976389b0
