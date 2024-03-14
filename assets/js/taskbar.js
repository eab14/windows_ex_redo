const addHandlersTask = () => {

    const prev_task = document.getElementById('taskbar_prev');
    const next_task = document.getElementById('taskbar_next');

    const taskbar = document.getElementById('taskbar_placer');

    prev_task.addEventListener('click', function() {

        let task_windows = taskbar.querySelectorAll('.window');
        if (task_windows.length > 0) for (let i = 0; i < task_windows.length; i++) gsap.to(task_windows[i], 0.3, { x: "-=290", ease:Power1.easeInOut });

    });

    next_task.addEventListener('click', function() {

        let task_windows = taskbar.querySelectorAll('.window');
        if (task_windows.length > 0) for (let i = 0; i < task_windows.length; i++) gsap.to(task_windows[i], 0.3, { x: "+=290", ease:Power1.easeInOut });

    });

}

addHandlersTask();