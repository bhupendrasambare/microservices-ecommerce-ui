export interface HeroSectionProp {
    title: string; 
    description: string; 
    showButton:boolean
}

export interface MyVerticallyCenteredModalProps {
    show: boolean;
    onHide: () => void;
}