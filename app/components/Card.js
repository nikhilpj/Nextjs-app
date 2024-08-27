import styles from "@/app/page.module.css";
import Image from "next/image";
import { cardDetails } from "@/lib/data";
import Button from "./Button";
const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>
        <span>Most popular cars</span>
      </div>
      <div className={styles.cardScroll}>
        <div className={styles.card}>
          {cardDetails.map((card, cardIndex) => (
            <div className={styles.carCard}>
              <div className={styles.cardImage} key={cardIndex}>
                <Image
                  src={`/${card.image}`}
                  layout="fill"
                  objectFit="cover"
                  alt="card image"
                />
              </div>
              <div className={styles.cardDetails}>
                <div className={styles.carTitle}>
                  <span>{card.title}</span>
                </div>
                <div className={styles.carDescription}>
                  <p>{card.description}</p>
                </div>
                <div className={styles.cardIcons}>
                  <Image src="people.svg" width={12} height={15} />
                  <span>6 people</span>
                  <Image src="automatic.svg" width={12} height={15} />
                  <span>Automatic</span>
                  <Image src="game-icons_car-door.svg" width={12} height={15} />
                  <span>5...</span>
                </div>
                <div className={styles.cardPriceButton}>
                <div className={styles.price}>
                  <span>{card.price}</span>
                </div>
                <div>
                  <Button
                    height={38}
                    width={128}
                    name="Book Now"
                    backgroundColor="#E21E26"
                    color="white"
                    border="none"
                    borderRadius={4}
                  />
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Card;
