import profileData from "../../data/profile.json";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-primary/5 mt-auto">
            <div className="max-width-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-gray text-sm">
                        &copy; {new Date().getFullYear()} {profileData.name} · {profileData.affiliation}
                    </p>
                    <div className="flex space-x-6">
                        {profileData.social.scholar && (
                            <a href={profileData.social.scholar} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange transition-colors text-sm font-medium">
                                Scholar
                            </a>
                        )}
                        {profileData.social.linkedin && (
                            <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange transition-colors text-sm font-medium">
                                LinkedIn
                            </a>
                        )}
                        {profileData.social.github && (
                            <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange transition-colors text-sm font-medium">
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}
