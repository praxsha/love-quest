document.getElementById("startBtn").addEventListener("click", function () {

    document.querySelector(".container").innerHTML = `

        <h1 class="title">🌸 Chapter 1 🌸</h1>

        <p class="subtitle">
            Every great love story begins with a single step...
            <br><br>
            Today is the day your adventure starts.
            Every choice, every smile, every memory will become part of your Love Quest.
            <br><br>
            Are you ready? ❤️
        </p>

        <button id="nextBtn">
            Continue ➜
        </button>

    `;

    document.getElementById("nextBtn").addEventListener("click", function(){

        document.querySelector(".container").innerHTML = `

            <h1 class="title">💌 Welcome 💌</h1>

            <p class="subtitle">
                This journey is full of memories,
                surprises,
                laughter,
                and lots of love.
                <br><br>
                Let the adventure begin... ❤️
            </p>

        `;

    });

});
