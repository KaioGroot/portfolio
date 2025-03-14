import { useLanguage } from '@/context/LanguageProvider';
import { Languages } from 'lucide-react';

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            className="bg-transparent rounded-full p-2 hover:bg-gray-500 transition flex items-center gap-2"
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
        >
            <Languages size={20} />
            <span className="text-sm">{language.toUpperCase()}</span>
        </button>
    );
}
