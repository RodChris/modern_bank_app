import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal
        <br className="sm:block hidden" />in a few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        Discover financial freedom by exploring our personalized solutions for better deals.
        With our comprehensive financial analysis tools, easily compare and find optimal rates,
        allowing you to make informed decisions that align with your financial goals.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
)

export default CardDeal