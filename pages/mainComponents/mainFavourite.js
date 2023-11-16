import styles from "./mainStyle.module.scss";
import LikedUser from "./likedUsers";

export default function MainFavourite() {
  return (
    <div className={styles.mainLikedUserContainer}>
      <LikedUser
        name="Antohny Dass"
        pesudo="antonydass"
        id="562345"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyg1uXkZ8EiRAkZYfhgmK-seMt0_s7_Y4fe0225oGF_HaBqgtTiiO1YERyGTDR5tTKZW4&usqp=CAU"
      />
      <LikedUser name="Elisa Dass" pesudo="elisadass" id="8796623" />
    </div>
  );
}
