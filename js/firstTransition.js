import Highway from '@dogstudio/highway';
import Tween from 'gsap';
import { TimelineLite } from 'gsap/gsap-core';

class Fade extends Highway.Transition{
    in({from, to, done}){

    const tl = new TimelineLite();
    tl.fromTo(to, 0.5, {left: '-100%', top: '50%'})

    }
    out(from, done){
        done();
    }
}