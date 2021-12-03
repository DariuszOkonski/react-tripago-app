import '../assets/css/AllHolidays.css';
import { Card } from './Card';

export const AllHolidays = () => {
    return (
        <div className="AllHolidays container">
            
            <div className="AllHolidays__buttons">
                <button type="button" className="btn btn-secondary">Show All</button>
                <button type="button" className="btn btn-secondary">America</button>
                <button type="button" className="btn btn-secondary">Europe</button>
            </div>

            <div className="AllHolidays__places">
                <div class="row">
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                </div>
            </div>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum deserunt aliquid dicta minus. Quaerat, doloremque. Error ipsum labore repellat! Similique libero mollitia reprehenderit ipsa, earum unde magni aliquam adipisci animi.
            </p>
        </div>
    )
}
