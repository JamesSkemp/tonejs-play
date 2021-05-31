import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

function playMusic() {
	console.log('playMusic');

	/*synth.triggerAttackRelease("A4", "8n");
	synth.triggerAttackRelease("A4", "8n");
	synth.triggerAttackRelease("G4", "8n");
	synth.triggerAttackRelease("E4", "8n");
	synth.triggerAttackRelease("D4", "8n");
	synth.triggerAttackRelease("E4", "8n");
	synth.triggerAttackRelease("G4", "8n");
	synth.triggerAttackRelease("A4", "8n");*/


	const seq = new Tone.Sequence((time, note) => {
		synth.triggerAttackRelease(note, 0.1, time);
		// subdivisions are given as subarrays
	//}, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]).start(0);
	}, ["A4", "A4", "G4", "E4", "D4", "E4", "G4", "A4"], "8n").start(0);
	// A, G, E, D, C supposedly sound good together


	Tone.Transport.start().stop(10);
}

const playButton = document.getElementById('playButton');
playButton?.addEventListener('click', () => { playMusic(); });
