
const UIDimensions = {width: 330, height: 500};

const SKIN_COLORS = { skinColor1: "#5396FA", skinColor2: "#FFCF37", skinColor3: "#F6D3B5", skinColor4: "#EDB893", skinColor5: "#916441", skinColor6 : "#402E23"};


//const HEAD = '<svg width="98" height="108" viewBox="0 0 98 108" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0182 39.0711C10.0182 17.4927 27.511 0 49.0894 0C70.6678 0 88.1605 17.4927 88.1605 39.0711V40.3612C93.6109 40.4564 98 44.8964 98 50.3596C98 55.8229 93.6109 60.2629 88.1605 60.3581V68.9289C88.1605 90.5073 70.6678 108 49.0894 108C27.511 108 10.0182 90.5073 10.0182 68.9289V60C4.48532 60 0 55.5228 0 50C0 44.4772 4.48532 40 10.0182 40V39.0711Z" fill="#F3C09A"/></svg>';
const HEAD = '<svg width="98" height="108" viewBox="0 0 98 108" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0182 39.0711C10.0182 17.4927 27.511 0 49.0894 0C70.6678 0 88.1605 17.4927 88.1605 39.0711V40.0013C93.6093 40.087 98 44.5308 98 50C98 55.4692 93.6093 59.913 88.1605 59.9987V68.9289C88.1605 90.5073 70.6678 108 49.0894 108C27.511 108 10.0182 90.5073 10.0182 68.9289V60C10.0122 60 10.0061 60 10 60C4.47715 60 0 55.5228 0 50C0 44.4772 4.47715 40 10 40C10.0061 40 10.0122 40 10.0182 40V39.0711Z" fill="#F3C09A"/></svg>';
const EYE_1 = '<svg width="62" height="36" viewBox="0 0 62 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5.11731" y="1.70374" width="22" height="32" rx="11" fill="white"/><rect x="36" y="2" width="22" height="32" rx="11" fill="white"/><rect x="13.0432" y="9.62964" width="10" height="16" rx="5" fill="#434243"/><rect x="39.963" y="9.9259" width="10" height="16" rx="5" fill="#434243"/></svg>';
const EYE_2 = '<svg width="62" height="36" viewBox="0 0 62 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.11731 18V22.7037C5.11731 28.7789 10.0422 33.7037 16.1173 33.7037C22.1924 33.7037 27.1173 28.7789 27.1173 22.7037V18H5.11731Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0432 18V20.6296C13.0432 23.3911 15.2818 25.6296 18.0432 25.6296C20.8046 25.6296 23.0432 23.3911 23.0432 20.6296V18H13.0432Z" fill="#434243"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 18V23C36 29.0751 40.9249 34 47 34C53.0751 34 58 29.0751 58 23V18H36Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39.963 18V20.9259C39.963 23.6873 42.2016 25.9259 44.963 25.9259C47.7244 25.9259 49.963 23.6873 49.963 20.9259V18H39.963Z" fill="#434243"/></svg>';
const MOUTH_1 = '<svg width="62" height="36" viewBox="0 0 62 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.6623 16.0132L51.503 13.4911C51.7345 12.7966 51.1659 12.097 50.4388 12.1815L35.12 13.9628C32.0504 14.3197 28.9496 14.3197 25.88 13.9628L10.6195 12.1883C9.87815 12.1021 9.30705 12.829 9.56627 13.5289L10.8698 17.0484C12.8602 22.4226 17.0604 26.6847 22.4049 28.7535L22.7858 28.901C27.1256 30.5809 31.9154 30.6949 36.3302 29.2233L38.0132 28.6623C43.9853 26.6716 48.6716 21.9853 50.6623 16.0132Z" fill="white"/></svg>';
const MOUTH_2 = '<svg width="62" height="36" viewBox="0 0 62 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M44.7107 15.964C45.2829 16.9089 44.9807 18.1386 44.0359 18.7108L43.0112 19.3313C34.9163 24.2331 24.7074 23.9688 16.8769 18.6549C15.9629 18.0347 15.7248 16.7909 16.345 15.8769C16.9653 14.963 18.209 14.7248 19.123 15.3451C25.6597 19.781 34.1819 20.0016 40.9393 15.9097L41.964 15.2892C42.9088 14.7171 44.1386 15.0192 44.7107 15.964Z" fill="#AB5A41"/></svg>';

const EYES = [null, EYE_1, EYE_2];
const MOUTHS = [null, MOUTH_1, MOUTH_2];



// This shows the HTML page in "ui.html".
figma.showUI(__html__, UIDimensions);


figma.ui.onmessage = msg => {
/*
  if (msg.type === 'create-rectangles') {
    const nodes: SceneNode[] = [];
    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.name = "Rectangle_" + i;
      rect.fills = [{type: 'SOLID', color: {r: 0.82, g: 0.7, b: 0.55}}];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }
  */
  if (msg.type === 'create-character'){
    console.log('create character');
    console.log(msg.character);
    
    const avatarNode : FrameNode = figma.createNodeFromSvg(HEAD);
    avatarNode.name = "Character";
    
    const head : VectorNode = avatarNode.children[0] as VectorNode;
    head.name = "Head";
    //head.fills = [{type: 'SOLID', color: {r: 1, g: 0.7, b: 0.55}}];

    figma.currentPage.appendChild(avatarNode);

    /** add subNode */
    /*const eye = figma.createRectangle();
    eye.name = "Eye";
    eye.resize(10, 10);
    eye.x = 30;
    eye.y = 40;
    eye.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}];
    eye.cornerRadius = 40;
    console.log(eye.constraints);
    eye.constraints = {horizontal: "SCALE", vertical : "SCALE"};

    avatarNode.appendChild(eye);
    */
    /** add eye */
    //const eyeNode : FrameNode = figma.createNodeFromSvg(EYE_1);
    const eyeNode : FrameNode = figma.createNodeFromSvg(EYES[msg.character.eyes]);
    eyeNode.name = "Eyes";
    eyeNode.constraints = {horizontal: "SCALE", vertical: "SCALE"};
    eyeNode.x = 18;
    eyeNode.y = 30;

    avatarNode.appendChild(eyeNode);


    const mouthNode : FrameNode = figma.createNodeFromSvg(MOUTHS[msg.character.mouth]);
    mouthNode.name = "Mouth";
    mouthNode.constraints = {horizontal: "SCALE", vertical:"SCALE"};
    mouthNode.x = 18;
    mouthNode.y = 66;

    avatarNode.appendChild(mouthNode);


    /** center camera on new FrameNode inserted */
    const nodes : SceneNode[] = [];
    nodes.push(avatarNode);
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);


  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};

function clone(val) {
  return JSON.parse(JSON.stringify(val))
}