class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        if (!config)
            throw new Error("config is not passed");
        
        this.config = config;
        this.currentState = config.initial;
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.currentState;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if (!this.config.states[state]) {
            throw new Error("No " + state + " state found");
        }
        this.currentState = state;
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        var targetState = this.config.states[this.currentState].transitions[event];

        if (!targetState) {
            throw new Error("No " + event + " event found");
        } else {
            this.changeState(targetState);
        }

    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.changeState(this.config.initial);
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        var arr = new Array();
        if (event == null) {
            for (var prop in this.config.states){
                arr.push(prop);
            }
            return arr;
        } else {
            
        }
    }
    
    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
