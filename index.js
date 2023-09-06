function init() {
    $('.image-container').show();
    $('#main').show();
    $('#loading').hide();
    $('#result').hide();
}

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;
const $form = $('#diet-form');
const $frameContainer = $('.frame-container');

$form.on('submit', async function(e) {
    e.preventDefault();

    const type = $('#type').val();
    const days = $('#days').val();
    const extrafood = $('#extrafood').val();
    const work1 = $('#work1').prop('checked');
    const work2 = $('#work2').prop('checked');
    const work3 = $('#work3').prop('checked');
    const work4 = $('#work4').prop('checked');

    let purpose = '';
    if (work1) purpose += '체중증가 ';
    if (work2) purpose += '체중감량 ';
    if (work3) purpose += '체중유지 ';
    if (work4) purpose += '근육증가 ';

    const data = {
        "role": "system",
        "content": `운동 종류: ${type}, 식단 기간: ${days}, 못 먹는 음식: ${extrafood}, 목적: ${purpose} 등을 활용해서 운동식단을 짜드리겠습니다.`
    };
    $('.image-container').hide();
    $('#main').hide();
    $('#loading').show();

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([data]),
            redirect: 'follow'
        });

        const result = await response.json();
        const numDays = parseInt(days, 10) || 1;

        $frameContainer.empty(); // 기존 내용 삭제

        for (let i = 1; i <= numDays; i++) {
            const frame = $('<div>').addClass('frame');
            frame.html(`
                <h3>Day ${i}</h3>
                <p>${result.choices[0].message.content}</p>
            `);
            $frameContainer.append(frame);
        }

        $('#loading').hide();
        $('#result').show();
    } catch (error) {
        console.error("Error fetching data:", error);
        $('#loading').hide();
        $('#main').show();
        alert("An error occurred. Please try again.");
    }
});
document.getElementById('exportBtn').addEventListener('click', function() {
    const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'diet_schedule.html'; // 원하는 파일명을 설정하세요.

    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
});
