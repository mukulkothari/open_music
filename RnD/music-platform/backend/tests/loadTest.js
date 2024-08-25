const artillery = require('artillery');
const fs = require('fs');

const testScript = {
    config: {
        target: 'http://localhost:3000',
        phases: [
            { duration: 60, arrivalRate: 5 }
        ]
    },
    scenarios: [
        {
            flow: [
                { get: { url: '/' } }
            ]
        }
    ]
};

fs.writeFileSync('test-script.json', JSON.stringify(testScript));

artillery.run('test-script.json').then(result => {
    console.log('Load test completed:', result);
});
