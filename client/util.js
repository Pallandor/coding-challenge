import React from 'react';

/* eslint-disable */
export const containsRoute = (currentPath, partialRouteStringToMatch) => {
  const regExpObj = new RegExp(partialRouteStringToMatch, 'gi');
  return regExpObj.test(currentPath);
};

/** Strips '/show' from slugs **/
export const cleanSlugForRouting = completeShowSlug => completeShowSlug.slice(5);

/** Shallow props injector (1 level deep) **/
export const injectReactChildrenWithProps = (childComponents, propsToInject) =>
  React.Children.map(childComponents, child =>
    React.cloneElement(
      child,
      propsToInject,
    ));
