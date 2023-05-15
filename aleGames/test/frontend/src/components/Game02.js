import React, { useState, useEffect } from 'react';
import './Game02.css';

function Tamagochi() {
    const [name, setName] = useState('Jumino (Stardew Valley)');
    const [age, setAge] = useState(0);
    const [health, setHealth] = useState(100);
    const [happiness, setHappiness] = useState(100);
    const [love, setLove] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAge(age => age + 1);
            setHealth(health => Math.max(0, health - 1));
            setHappiness(happiness => Math.max(0, happiness - 1));
            setLove(love => Math.max(0, love - 2));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const feed = () => {
        setHealth(health => Math.min(100, health + 10));
        setLove(love => Math.min(100, love + 20));
    };

    const play = () => {
        setHappiness(happiness => Math.min(100, happiness + 10));
        setLove(love => Math.min(100, love + 20));
    };

    var json = {};

    const insertJ = () => {
        json = {name, age, health, happiness, love};
        console.log(json);
    };

    const getBarColor = value => {
        if (value > 80) {
            return 'green';
        } else if (value > 20) {
            return 'yellow';
        } else {
            return 'red';
        }
    };

    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>
                Health:
                <div className="progress-bar" style={{ width: `${health}%`, backgroundColor: getBarColor(health), }}>{health}</div>
            </p>
            <p>
                Starve:
                <div className="progress-bar" style={{ width: `${happiness}%`, backgroundColor: getBarColor(happiness), }}>{happiness}</div>
            </p>
            <p>
                Love:
                <div className="progress-bar" style={{ width: `${love}%`, backgroundColor: getBarColor(love), }}>{love}</div>
            </p>
            {health === 0 || happiness === 0 ? (
                <p>Your Jumino has died.</p>
            ) : (
                <>
                    <button onClick={feed}>Feed</button>
                    <button onClick={play}>Play</button>
                    <button onClick={insertJ}>Save</button>
                </>
            )}
            <p>
                Jumino's State:
                <div id="testimg" style={{
                    backgroundImage: (() => {
                        switch (true) {
                            case love >= 90:
                                return 'url(https://media.tenor.com/JLAIN7da2PMAAAAC/junimo-stardew.gif)';
                            case love >= 60:
                                return 'url(https://media.tenor.com/dsAkCR4X4V0AAAAC/junimo-stardew.gif)';
                            case love >= 40:
                                return 'url(https://media.tenor.com/2OpMDWB1lqcAAAAC/junimo-stardew.gif)';
                            case love >= 20:
                                return 'url(https://media.tenor.com/V0cWSW8HpAUAAAAC/junimo-stardew.gif)';
                            default:
                                return 'url(https://media.tenor.com/CKFjEbkeYZAAAAAC/junimo-stardew.gif)';
                        }
                    })()
                }}></div>
            </p>
        </div>
    );
}

export default Tamagochi;