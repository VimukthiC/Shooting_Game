
var preloader= document.getElementById('loading');
function loading() {
    preloader.style.display='none';
}


function sound(){
    document.getElementById('sound').play();
}


$('#play').hide();
$('#playAgain').hide();

var bird;
var i = 0;
var u;
var b;

var x;
var y;
var q;
var r;

var createBird;

function playShooting() {
    $('#input1').val(0);
    $('#start').hide();
    $('#playAgain').hide();
    $('#play').show();

    window.addEventListener('mousedown', function (e) {
        x = `${e.x}`;
        y = `${e.y}`;
    });

    let counter = 50;
    setInterval(function () {
        counter--;

        if (counter >= 0) {
            time = document.getElementById('timeCount');
            time.innerHTML = counter;
        }

        if (counter == 8) {
            clearInterval(u);
        }

        if (counter == 0) {

            $('.birdClass').remove();
            b=$('.score').val();
            $('#input2').val(b);

            if(b<7){
                $('#btnLevel').hide();
            }
            if(b>7){
                $('#btnLevel').show();
            }

            clearInterval(u);
            $('#input1').val(0);

            $('#playAgain').show();
            $('#play').hide();
        }
    }, 1000);

    $('#btnClose').click(function () {
        clearInterval(u);
        $('#start').css("display", "block");
        $('#playAgain').css("display", "none");
        $('#playAgain').css("display", "none");
    });

    var  removeCount=0;
    function getdiv() {

        bird.addEventListener('click', function (e) {
            q = `${e.clientX}`;
            r = `${e.clientY}`;

            i = $(this).attr('id');

            if (x == q & y == r) {
                $('#' + i).remove();
            }

            if ($('#' + i).remove()) {
                removeCount = removeCount + 1;
                $('.score').val(removeCount);
            }
        });
    }


    var id = 0;
    createBird=function createBird() {
        bird = document.createElement('div');
        bird.className = 'birdClass';
        id = id + 1;
        bird.id = id;
        bird.click = getdiv();
        bird.style.top = Math.floor() * 50 + 'vw';
        bird.innerHTML = "<img src=assests/523499_50f5d.gif height='100px' width='100px'>"
        document.body.appendChild(bird);

        if (id == 1) {
            $('#1').addClass('div1');
        }
        if (id == 2) {
            $('#2').addClass('div2');
        }
        if (id == 3) {
            $('#3').addClass('div3');
        }
        if (id == 4) {
            $('#4').addClass('div4');
        }
        if (id == 5) {
            $('#5').addClass('div5');
        }
        if (id == 6) {
            $('#6').addClass('div6');
        }
        if (id == 7) {
            $('#7').addClass('div7');
        }
        if (id == 8) {
            $('#8').addClass('div8');
        }
        if (id == 9) {
            $('#9').addClass('div9');
        }
        if (id == 10) {
            $('#10').addClass('div10');
        }
        if (id == 11) {
            $('#11').addClass('div11');
        }
        if (id == 12) {
            $('#12').addClass('div12');
        }
        if (id == 13) {
            $('#13').addClass('div13');
        }
        if (id == 14) {
            $('#14').addClass('div14');
        }
        if (id == 15) {
            $('#15').addClass('div15');
        }
    }
}

function levelOne() {
    u=setInterval(createBird,4000);
}

function levelTwo() {
    u=setInterval(createBird,2700);
}

function playLevelOne() {
    playShooting();
    levelOne();
}

function playLevelTwo() {
    playShooting();
    levelTwo();
}