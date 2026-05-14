const QeurNetwork = {
    socket: null,
    players: {},

    connect: function(serverUrl) {
        this.socket = new WebSocket(serverUrl);

        this.socket.onopen = () => {
            console.log("QeurNetwork: Connected to server");
        };

        this.socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            this.handleServerMessage(data);
        };

        this.socket.onerror = (error) => {
            console.log("QeurNetwork: Connection error", error);
        };
    },

    sendPosition: function(x, y, z) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify({ type: 'move', x, y, z }));
        }
    },

    handleServerMessage: function(data) {
        // Здесь будет логика обновления позиций других игроков в BuilderBox
        if (data.type === 'update') {
            this.players[data.id] = { x: data.x, y: data.y, z: data.z };
        }
    }
};
