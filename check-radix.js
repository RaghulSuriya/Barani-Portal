
try {
    const radix = require('radix-ui');
    console.log('Exports from radix-ui:', Object.keys(radix));
} catch (e) {
    console.error('Failed to import radix-ui:', e.message);
}
