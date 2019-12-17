const crashAudio = $('#crash-audio').get(0),
  floorTomAudio = $('#floor-tom-audio').get(0),
  hiHatAudio = $('#hi-hat-audio').get(0),
  kickAudio = $('#kick-audio').get(0),
  snareAudio = $('#snare-audio').get(0),
  tomLeftAudio = $('#tom-left-audio').get(0),
  tomRightAudio = $('#tom-right-audio').get(0);

const playInstrument = instr => {
  playSound(instr);
  animate(instr);
};

const playSound = instr => {
  switch (instr) {
    case 'crash':
      crashAudio.currentTime = 0;
      crashAudio.volume = 0.5;
      crashAudio.play();
      break;
    case 'floor-tom':
      floorTomAudio.currentTime = 0;
      floorTomAudio.play();
      break;
    case 'hi-hat':
      hiHatAudio.currentTime = 0;
      hiHatAudio.play();
      break;
    case 'kick':
      kickAudio.currentTime = 0;
      kickAudio.play();
      break;
    case 'snare':
      snareAudio.currentTime = 0;
      snareAudio.play();
      break;
    case 'tom-left':
      tomLeftAudio.currentTime = 0;
      tomLeftAudio.play();
      break;
    case 'tom-right':
      tomRightAudio.currentTime = 0;
      tomRightAudio.play();
      break;
  }
};

const animate = instr => {
  switch (instr) {
    case 'crash':
      break;
    case 'floor-tom':
      break;
    case 'hi-hat':
      break;
    case 'kick':
      break;
    case 'snare':
      break;
    case 'tom-left':
      break;
    case 'tom-right':
      break;
  }
};

$(document).on('click', '#drum-set #crash-all', () => {
  playInstrument('crash');
});

$(document).on('click', '#drum-set #floor-tom', () => {
  playInstrument('floor-tom');
});

$(document).on('click', '#drum-set #hi-hat-all', () => {
  playInstrument('hi-hat');
});

$(document).on('click', '#drum-set #kick', () => {
  playInstrument('kick');
});

$(document).on('click', '#drum-set #snare', () => {
  playInstrument('snare');
});

$(document).on('click', '#drum-set #tom-left', () => {
  playInstrument('tom-left');
});

$(document).on('click', '#drum-set #tom-right', () => {
  playInstrument('tom-right');
});
