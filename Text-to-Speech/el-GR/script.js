// Initialize Web Speech API synthesis
const synth = window.speechSynthesis;

// DOM Elements
const textInput = document.getElementById('text-input');
const voiceSelect = document.getElementById('voice-select');
const rateRange = document.getElementById('rate-range');
const rateValue = document.getElementById('rate-value');
const pitchRange = document.getElementById('pitch-range');
const pitchValue = document.getElementById('pitch-value');

const btnSpeak = document.getElementById('btn-speak');
const btnPause = document.getElementById('btn-pause');
const btnStop = document.getElementById('btn-stop');

let voices = [];

// Populate dropdown with available GREEK voices
function populateVoiceList() {
    // Fetch voices from API
    voices = synth.getVoices();
    
    // Filter specifically for Greek voices ('el' or 'el-GR')
    const greekVoices = voices.filter(voice => voice.lang.includes('el'));

    // Clear dropdown placeholder
    voiceSelect.innerHTML = '';

    if (greekVoices.length === 0) {
        const option = document.createElement('option');
        option.textContent = 'No Greek voices found on your system';
        voiceSelect.appendChild(option);
        return;
    }

    // Append Greek voices to dropdown
    greekVoices.forEach(voice => {
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
}

// Fixed async handling behavior for Chrome / Safari voice fetching
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

// Update UI numerical badges when sliders change
rateRange.addEventListener('input', () => rateValue.textContent = rateRange.value);
pitchRange.addEventListener('input', () => pitchValue.textContent = pitchRange.value);

// Trigger Greek speech synthesis
function speak() {
    // If speaking and paused, resume playback instead of building a new track
    if (synth.speaking && synth.paused) {
        synth.resume();
        return;
    }

    if (textInput.value !== '') {
        // Cancel ongoing tasks before starting a new request
        synth.cancel();

        const utterThis = new SpeechSynthesisUtterance(textInput.value);

        // Find and apply the selected target Greek voice object
        const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
        utterThis.voice = voices.find(voice => voice.name === selectedVoiceName);

        // Apply Speed & Tone configuration parameters
        utterThis.rate = rateRange.value;
        utterThis.pitch = pitchRange.value;

        // Execute synthesis
        synth.speak(utterThis);
    }
}

// Button Interaction listeners
btnSpeak.addEventListener('click', speak);

btnPause.addEventListener('click', () => {
    if (synth.speaking && !synth.paused) {
        synth.pause();
    }
});

btnStop.addEventListener('click', () => {
    if (synth.speaking) {
        synth.cancel();
    }
});