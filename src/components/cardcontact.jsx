import { Phone } from 'lucide-react';
export default function CardContact() {
    return (
        <div className="card text-center w-60 bg-base-100 shadow-xl">
            <figure className="inline-block px-10 pt-10 w-40 h-40 bg-blue-200 rounded-full">
                <img src="/kaio.png" alt="Shoes" className="rounded-full" />
            </figure>
            <div className="card-body rounded-2xl  px-2 py-12 bg-gradient-to-r from-blue-900  to-gray-900">
                <h2 className="card-title">Contact</h2>
                <p className="flex gap-2">
                    <Phone />
                    55 (68) 99231-6401
                </p>
                <div className="card-actions justify-end">
                    <div className="btn btn-primary">Button</div>
                </div>
            </div>
        </div>
    );
}
