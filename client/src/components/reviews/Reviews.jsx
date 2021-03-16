import React from "react"
import arrowLeft from "../../images/icons/arrowLeft.png"
import arrowRight from "../../images/icons/arrowRight.png"

const Reviews = () => {
    return (
        <div class="w-auto bg-secondary pb-16">
            <span class="flex justify-center font-bold font-jost text-xl pt-11 pb-12">Отзывы</span>
            <div class="flex items-center justify-around">
                <img class=" w-12 h-12 " src={arrowLeft} alt="arrowLeft" />
                <div class="flex flex-col w-1/3 bg-primary rounded-xl p-8">
                    <span class="text-titleReviews font-jost font-bold pb-2">Зимний тур в Териберку</span>
                    <span class="text-dateReviewesSize font-jost text-dateReviewes pb-2.5">17.08.21-21.08.21</span>
                    <span class="font-jost text-textSeach pb-5">Матвей Миронов</span>
                    <p class="font-jost text-pReviews pb-6">Отдохнул отлично, перезагрузился. Тур покупал в последний момент, чтобы убежать на юг из холодной Москвы. Про Египет не знал ничего кроме пирамид. Луксор с его древними храмами вообще оказался для меня полным сюрпризом. </p>
                    <div>
                        <span class="font-jost text-textSeach">Сложность: </span>
                        <span class="font-jost text-textSeach font-medium">Тяжело</span>
                    </div>
                    <div>
                        <span class="font-jost text-textSeach">Инструктор: </span>
                        <span class="font-jost text-textSeach font-medium">Понравился</span>
                    </div>
                    <div>
                        <span class="font-jost text-textSeach">Общая оценка: </span>
                        <span class="font-jost text-textSeach font-medium">Хорошо</span>
                    </div>
                </div>
                <div class="flex flex-col w-1/3 bg-primary rounded-xl p-8">
                    <span class="text-titleReviews font-jost font-bold pb-2">Зимний тур в Териберку</span>
                    <span class="text-dateReviewesSize font-jost text-dateReviewes pb-2.5">17.08.21-21.08.21</span>
                    <span class="font-jost text-textSeach pb-5">Матвей Миронов</span>
                    <p class="font-jost text-pReviews pb-6">Отдохнул отлично, перезагрузился. Тур покупал в последний момент, чтобы убежать на юг из холодной Москвы. Про Египет не знал ничего кроме пирамид. Луксор с его древними храмами вообще оказался для меня полным сюрпризом. </p>
                    <div>
                        <span class="font-jost text-textSeach">Сложность: </span>
                        <span class="font-jost text-textSeach font-medium">Тяжело</span>
                    </div>
                    <div>
                        <span class="font-jost text-textSeach">Инструктор: </span>
                        <span class="font-jost text-textSeach font-medium">Понравился</span>
                    </div>
                    <div>
                        <span class="font-jost text-textSeach">Общая оценка: </span>
                        <span class="font-jost text-textSeach font-medium">Хорошо</span>
                    </div>
                </div>
                <img class="w-12 h-12" src={arrowRight} alt="arrowRight" />
            </div>
        </div>
    )
}

export default Reviews