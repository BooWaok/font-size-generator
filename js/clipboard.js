var btns = document.querySelectorAll('button');
new ClipboardJS('button');

var clipboard = new ClipboardJS('button');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
    document.getElementById("button").innerHTML = "클립보드에 저장되었습니다"
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});