module.exports = {
    apps: [
        {
            name: 'sweet-to-do-server',
            script: './src/index.js',
            exec_mode: 'fork',
            instances: 1,
            watch: true,
            watch_options: {
                usePolling: true
            }
        }
    ]
};
