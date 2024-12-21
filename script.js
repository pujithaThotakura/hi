function changeEmotion(emotion) {
    const emojiDisplay = document.getElementById('emojiDisplay');
    const description = document.getElementById('description');
    const body = document.body;

    // Update the emoji, description, and background color based on the selected emotion
    if (emotion === 'happy') {
        emojiDisplay.textContent = '😊';
        description.textContent = 'You are feeling happy! A moment of joy and positivity.';
        body.style.backgroundColor = '#FFEB3B';  // Yellow
    } else if (emotion === 'sad') {
        emojiDisplay.textContent = '😞';
        description.textContent = 'You are feeling sad. A moment of disappointment or sorrow.';
        body.style.backgroundColor = '#808080';  // Grey
    } else if (emotion === 'angry') {
        emojiDisplay.textContent = '😡';
        description.textContent = 'You are feeling angry. A surge of frustration or rage.';
        body.style.backgroundColor = '#FF0000';  // Red
    } else if (emotion === 'excited') {
        emojiDisplay.textContent = '😃';
        description.textContent = 'You are feeling excited! A burst of enthusiasm and energy.';
        body.style.backgroundColor = '#9966ff';  // Light violet
    } else if (emotion === 'surprised') {
        emojiDisplay.textContent = '😲';
        description.textContent = 'You are feeling surprised! A moment of astonishment or shock.';
        body.style.backgroundColor = '#2196F3';  // Blue
    } else if (emotion === 'bored') {
        emojiDisplay.textContent = '😐';
        description.textContent = 'You are feeling bored. A sense of indifference or disinterest.';
        body.style.backgroundColor = '#FFFFE0';  // Light yellow
    } else if (emotion === 'confused') {
        emojiDisplay.textContent = '😕';
        description.textContent = 'You are feeling confused. A state of uncertainty or lack of clarity.';
        body.style.backgroundColor = '#FF9800';  // Orange
    } else if (emotion === 'love') {
        emojiDisplay.textContent = '😍';
        description.textContent = 'You are feeling love! A strong feeling of affection or care.';
        body.style.backgroundColor = '#C71585';  // MediumVioletRed
    } else if (emotion === 'shy') {
        emojiDisplay.textContent = '😳';
        description.textContent = 'You are feeling shy. A sense of embarrassment or self-consciousness.';
        body.style.backgroundColor = '#9C27B0';  // Purple
    } else if (emotion === 'relaxed') {
        emojiDisplay.textContent = '😌';
        description.textContent = 'You are feeling relaxed. A state of calm and peacefulness.';
        body.style.backgroundColor = '#8BC34A';  // Light Green
    } else if (emotion === 'silly') {
        emojiDisplay.textContent = '🤪';
        description.textContent = 'You are feeling silly! A fun and goofy mood.';
        body.style.backgroundColor = '#FFC107';  // Amber
    } else if (emotion === 'proud') {
        emojiDisplay.textContent = '😎';
        description.textContent = 'You are feeling proud! A sense of accomplishment and confidence.';
        body.style.backgroundColor = '#3F51B5';  // Indigo
    } else if (emotion === 'embarrassed') {
        emojiDisplay.textContent = '😳';
        description.textContent = 'You are feeling embarrassed. A moment of awkwardness or self-consciousness.';
        body.style.backgroundColor = "#ffcccc";  // Peach
    } else if (emotion === 'grateful') {
        emojiDisplay.textContent = '🙏';
        description.textContent = 'You are feeling grateful! A sense of thankfulness and appreciation.';
        body.style.backgroundColor = '#4CAF50';  // Green
    } else if (emotion === 'nervous') {
        emojiDisplay.textContent = '😬';
        description.textContent = 'You are feeling nervous. A state of anxiety or unease.';
        body.style.backgroundColor = '#FF7043';  // Deep Orange
    } else if (emotion === 'hopeful') {
        emojiDisplay.textContent = '🤞';
        description.textContent = 'You are feeling hopeful! A positive anticipation for the future.';
        body.style.backgroundColor = '#00FFFF';  // Aqua
    }
}
