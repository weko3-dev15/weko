Reviewing pull requests
=======================

Remember you are not a police officer. You are here to help the contributor
get their code integrated and ensure they have a great experience contributing
to WEKO3.






.. _check-it-from-the-helicopter:

1. **Check it from the helicopter.** If it ain’t green, it ain’t finished. If it
   ain’t understandable, it ain’t documented.

.. _beware-of-inter-module-relations:

2. **Beware of inter-module relations.** Changing API? Perhaps this pull request
   may break other modules. Check outside usage. Check the presence of
   ``versionadded``, ``versionmodified``, ``deprecated`` docstring directives.

.. _beware-of-inter-service-relations:

3. **Beware of inter-service relations.** Changing pre-existing tests? Perhaps
   this pull request does not fit the needs of other WEKO3 services.

.. _avoid-self-merges:

6. **Avoid self merges.** Each pull request should be seen by another pair of
   eyes. Was it authored and reviewed by two different persons? Good. Were the
   two different persons coming from two different service teams? Better.
