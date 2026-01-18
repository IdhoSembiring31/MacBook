
import {create} from "zustand";

const useMacbookStore = create((set)=>({
    color:'#123123',
    setColor:(color)=>set({color}),

    scale:0.08,
    setScale:(scale)=>set({scale}),

    texture:'/videos/feature-1.mp4',
    setTexture: (texture)=>set({texture}),

    reset:()=>set({color:"#2e2e2e", scale:0.08,texture:'vide0s/feature1.mp4'})

}))
export default useMacbookStore;
