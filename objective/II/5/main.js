var counter_1 = {
    i: 0,
    incr: function() {
        setTimeout(function() {
            this.i++;
            console.log(this.i);
        }, 1000)
    }
}

var counter_2 = {
    i: 0,
    incr: function() {
        setTimeout(function() {
            this.i++;
            console.log(this.i);
        }.bind(this), 1000)
    }
}

var counter_3 = {
    i: 0,
    incr: function() {
        setTimeout(() => {
            this.i++;
            console.log(this.i);
        }, 1000)
    }
}
counter_1.incr();
counter_2.incr();
counter_3.incr();

