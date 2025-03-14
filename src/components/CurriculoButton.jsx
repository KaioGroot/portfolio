import { FileDown, Eye } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';

export default function CurriculoButton() {
    const { language } = useLanguage();
    const messages = require(`../../messages/${language}.json`);

    return (
        <div className="flex gap-4">
            <a
                href="/kaio.pdf"
                download
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
                <FileDown size={20} />
                <span>{messages.about.cv.download}</span>
            </a>
            <a
                href="/kaio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
                <Eye size={20} />
                <span>{messages.about.cv.view}</span>
            </a>
        </div>
    );
}
