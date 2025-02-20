interface SkillTagProps {
  skill: string;
}

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <span className="
              text-sm 
              px-3 
              py-1 
              rounded-full 
              bg-gradient-to-r 
              from-blue-100 
              to-purple-100 
              dark:from-blue-900/50 
              dark:to-purple-900/50 
              text-gray-700 
              dark:text-gray-300 
              border 
              border-blue-200 
              dark:border-blue-800/50
            "
    >
      {skill}
    </span>
  );
}