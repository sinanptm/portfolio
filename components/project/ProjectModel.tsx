import { Project } from "@/types";
import { Dispatch, SetStateAction } from "react";

type Props = {
    project: Project | null;
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const ProjectModel = ({ isOpen, project, setOpen }: Props) => {
    console.log(isOpen, project, setOpen);
    
    return (
        <div></div>
    );
};

export default ProjectModel;