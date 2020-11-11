const adaptOfferToClient = (offer) => {
  const result = Object.assign(
      {},
      offer,
      {
        bedroomsCount: offer.bedrooms,
        facilities: offer.goods,
        photosUrl: offer.images,
        isPremium: offer.is_premium,
        isInBookmark: offer.is_favorite,
        description: offer.title,
        hostName: offer.host.name,
        hostDescription: offer.description,
        hostAvatar: offer.host.avatar_url,
        isHostPremium: offer.host.is_pro,
        maxCapacity: offer.max_adults,
      }
  );

  delete result.images;
  delete result.is_favorite;
  delete result.is_premium;
  delete result.host;
  delete result.goods;
  delete result.max_adults;

  return result;
};

export {adaptOfferToClient};