let CANVAS_WIDTH = document.body.clientWidth;
let CANVAS_HEIGHT = document.body.clientHeight + 200;
let c = document.getElementById('canvas');
let ctx = c.getContext("2d");

var metaData = {
    winCenter: {
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT / 2
    }
};

function playAudio(){
    document.getElementById("theme").play();
    document.getElementById("theme").loop = true;
}

var mainStructure = {
    lineColor: '#86e8f6',
    gradLight: '#233169',
    gradDark: '#19183a',
    gradPink0: '#f0d4fa',
    gradPink1: '#e47dec',
    gradPink2: '#862eaf',
    gradPink3: '#1f0b43',
    draw: function() {
                //Background
                ctx.fillStyle = '#000000';
                ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                ctx.fill();
                
                var grdMain = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT / 3 * 2);
                grdMain.addColorStop(0,this.gradPink3);
                grdMain.addColorStop(0.2,this.gradPink3);
                grdMain.addColorStop(0.8,this.gradPink2);
                grdMain.addColorStop(0.95,this.gradPink1);
                grdMain.addColorStop(1, this.gradPink0);
                ctx.fillStyle = grdMain;
                ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT / 3 * 2);
                
                //Horizons (horizontal lines at the end)
                ctx.strokeStyle = this.lineColor;
                
                //Bottom
                var grdBottom = ctx.createLinearGradient(0, CANVAS_HEIGHT / 3 * 2, 0, CANVAS_HEIGHT);
                grdBottom.addColorStop(0, this.gradLight);
                grdBottom.addColorStop(1, this.gradDark);
                ctx.fillStyle = grdBottom;
                ctx.fillRect(0, CANVAS_HEIGHT / 3 * 2, CANVAS_WIDTH, CANVAS_HEIGHT);
                
                ctx.moveTo(0, CANVAS_HEIGHT / 3 * 2);
                ctx.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT / 3 * 2);
                ctx.stroke();

                let verticalLines = 20;
                let stepWidth = CANVAS_WIDTH * 3 / verticalLines;

                //Vertical lines bottom
                posLine = 0 - CANVAS_WIDTH;

                for (let i = 1; i <= verticalLines; i++) {
                    ctx.moveTo(posLine, CANVAS_HEIGHT);

                    let m = (metaData.winCenter.y - CANVAS_HEIGHT) / (metaData.winCenter.x - posLine);
                    let b = CANVAS_HEIGHT - (m * posLine);

                    let x = (CANVAS_HEIGHT / 3 * 2 - b) / m;

                    posLine = posLine + stepWidth;

                    ctx.lineTo(x, CANVAS_HEIGHT / 3 * 2);
                    ctx.strokeStyle = this.lineColor;
                    ctx.stroke();
                }
            }
        }

        var HorizontalLine = {
            horizontalLinesTop: null,
            horizontalLinesBottom: null,
            count: null,
            constructor: function(I) {
                I.acceleration = 0;

                I.from = {
                    x: 0,
                    y: 0
                };

                I.to = {
                    x: CANVAS_WIDTH,
                    y: 0
                };

                return I;
            },
            init: function() {
                this.horizontalLinesBottom = this.generateHorizontalLines(CANVAS_HEIGHT / 3 * 2, CANVAS_HEIGHT, 7, 'bottom');

                this.horizontalLinesTop = this.generateHorizontalLines(0, CANVAS_HEIGHT / 3, 7, 'top')
            },
            generateHorizontalLines: function(from, to, num, mode) {
                this.count = num;

                var horizontalLines = [];
                var horizontalSpace = to - from;
                var yPos = from;

                for (let i = 0; i < num; i++) {
                    yPos = yPos + horizontalSpace / num;
                    hl = this.constructor({});
                    hl.from.y = yPos;
                    hl.to.y = yPos;

                    if (mode === 'top') {
                        hl.acceleration = num - i;
                    } else {
                        hl.acceleration = i;
                    }

                    horizontalLines.push(hl);
                }

                return horizontalLines;
            },
            draw: function() {
                this.horizontalLinesBottom.forEach(function(hl) {
                    ctx.moveTo(hl.from.x, hl.from.y);
                    ctx.lineTo(hl.to.x, hl.to.y);
                    ctx.shadowBlur = 0.3;
                    ctx.shadowColor = "#4595b4";
                    ctx.stroke();
                });
            },
            update: function() {
                this.horizontalLinesBottom.forEach(function(hl) {
                    hl.from.y += hl.acceleration;
                    hl.to.y += hl.acceleration;
                    hl.acceleration += 0.5;

                    if (hl.to.y >= CANVAS_HEIGHT || hl.from.y >= CANVAS_HEIGHT) {
                        hl.acceleration = 0;
                        hl.from.y = CANVAS_HEIGHT / 3 * 2;
                        hl.to.y = CANVAS_HEIGHT / 3 * 2;
                    }
                });

                this.horizontalLinesTop.forEach(function(hl) {
                    hl.from.y -= hl.acceleration;
                    hl.to.y -= hl.acceleration;
                    hl.acceleration += 0.5;

                    if (hl.to.y <= 0 || hl.from.y <= 0) {
                        hl.acceleration = 0;
                        hl.from.y = CANVAS_HEIGHT / 3;
                        hl.to.y = CANVAS_HEIGHT / 3;
                    }
                });
            }
        };

        var Text = {
            pieces: ['IGNORANCIA', 'Me alegro de verte. Quédate cerca y dame click', 'Necesitarás un estado mental circular', 'No te rindas nunca', 'Hay cosas por las que merece la pena luchar', 'NEGACIÓN' ,'Encontrarás un gran número de vueltas y giros inesperados', 'Avanza con cuidado y aprende a controlarte', 'Confía en tus instintos', 'El camino es normal', 'No lo niegues', 'Asúmelo', 'IRA', 'La ira puede facilitar algunas decisiones', 'Siempre surgen patrones incluso en el caos', 'Esto no tiene que definirte', 'Deja que te amplifique', 'Repetir las mismas acciones y esperar nuevos resultados es signo de locura', 'NEGOCIACIÓN', 'Pero también demuestra que eres humano', 'Una vez hecho algo no se puede deshacer', 'No puedes escapar', 'Acepta la situación y sigue adelante', 'El mero intento invita al fracaso', 'La resistencia no es una opción', 'CULPABILIDAD', 'Es una cuestión de perspectiva', 'El arrepentimiento tiene dos caras', 'Las cosas que hacemos', 'Y las cosas que desearíamos haber hecho', 'Otros pueden intentar hacer que te sientas culpable', 'Pero la culpabilidad solo es sincera cuando viene de dentro', 'DEPRESIÓN', 'No te pasa nada malo', '¿Por qué te haces esto?', '¿Qué intentas demostrar?', 'Acepta la situación y sigue adelante', 'Todo ese dolor y esa miseria. ¿De verdad han merecido la pena?', 'No quiero que sigas', 'ESPERANZA', 'Quiero que tú quieras seguir', 'No hay razones para desistir', 'Seguro que no esperabas llegar tan lejos', 'Pero si esperamos algo, ¿Cómo podemos avanzar?', 'Lo inesperado es bello', 'Renuncia a todas tus expectativas', 'ACEPTACIÓN', 'Ojalá pudieras ver esto', 'No estaría aquí si no hubiera sido por mí', 'Admítelo', 'El camino es bueno para ti', 'No hay nada que lamentar', 'La ira siempre es algo temporal', 'A veces dejar algo marchar es lo más difícil', 'Tienes que seguir adelante', 'Pero quiero que sepas una ultima cosa. Aquí estoy'],
            maxFontSize: 30,
            round: 0,
            acceleration: 0,
            waitFrame: 0,
            waitFrames: 35,
            currentFontSize: 0,
            init: function() {
                ctx.font = "0pt Helvetica";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
            },
            draw: function() {
                if (this.currentFontSize >= this.maxFontSize) {

                    this.waitFrame++;
                    
                    if (this.waitFrames <= this.waitFrame) {
                        this.waitFrame = 0;
                        this.currentFontSize = 6;
                        this.acceleration = 0;
                        this.round++;

                        if (this.round >= this.pieces.length) {
                            this.round = 0;
                        }
                    }
                } else {
                    this.acceleration += 0.4;
                    this.currentFontSize += this.acceleration;
                }

                ctx.font = "100 " + this.currentFontSize + "pt Opt Sans";
                ctx.fillStyle = "#fff";
                ctx.fillText(this.pieces[this.round], metaData.winCenter.x, metaData.winCenter.y);
            }
        }



        var init = function() {
            c.width = CANVAS_WIDTH;
            c.height = CANVAS_HEIGHT;
            HorizontalLine.init();
            Text.init();
        }

        var update = function() {
            HorizontalLine.update();
        }

        var draw = function() {
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            ctx.beginPath();
            mainStructure.draw();
            HorizontalLine.draw();
            Text.draw();
        }

        init();

        setInterval(function() {
            update();
            draw();
        }, 1000 / 25);