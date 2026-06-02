(function () {

    const groups = [...new Set(
        [...document.querySelectorAll('input[type="radio"]')]
            .map(r => r.name)
    )];

    groups.forEach(name => {
        const options = document.querySelectorAll(
            `input[type="radio"][name="${name}"]`
        );

        if (options.length) {
            // 90% Very Satisfied, 10% Satisfied
            const index = Math.random() < 0.9 ? 0 : 1;
            options[Math.min(index, options.length - 1)].click();
        }
    });

    document.querySelectorAll('textarea').forEach(t => {
        t.value = 'The course was well organized and helpful.';
    });

    setTimeout(() => {
        document.getElementById('ls-button-submit')?.click();
    }, 1000);

})();
